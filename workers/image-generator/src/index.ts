import { isUUID, bufferFromStream, requestInfo } from './utils';
import { HTTPException } from 'hono/http-exception';
import { StatusCode } from 'hono/utils/http-status';
import { snakeCase } from 'lodash-es';
import { Buffer } from 'node:buffer';
import { logger } from 'hono/logger';
import { Hono } from 'hono';

const app = new Hono<{
  Bindings: Env;
}>();

app.use(logger());

app.use(async (c, next) => {
  console.log(requestInfo(c));
  await next();
});

app.get('/generate/:prompt?', async (c) => {
  const defaultPrompt = 'cruise in naples with vesuvius and sun';
  const prompt = c.req.param('prompt') || defaultPrompt;
  // console.log(prompt);

  const textPrompt = `${prompt}. No extra info. Just the name.`;
  const textOutput = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct', { prompt: textPrompt });
  const imagePrompt = (textOutput as Record<string, string>).response;

  const imageOutput = await c.env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
    prompt: imagePrompt,
    num_steps: 20
  });

  const imageData = await bufferFromStream(imageOutput);
  const imageName = `${snakeCase(prompt)}.png`;

  const id = crypto.randomUUID();
  const caption = prompt;

  const sqlInsert = `INSERT INTO image_generated (id, caption, image_name, image_data) VALUES (?, ?, ?, ?)`;
  await c.env.DB_DATA.prepare(sqlInsert).bind(id, caption, imageName, imageData).run();

  const { origin } = requestInfo(c);
  const imageUrl = `${origin}/image/${id}/view`;

  return c.json({ id, caption, image_name: imageName, image_url: imageUrl });
});

app.get('/image/:id/view', async (c) => {
  const id = c.req.param('id');

  if (!isUUID(id)) {
    throw new HTTPException(400, { message: 'Params not valid.' });
  }

  const sql = `SELECT id, caption, image_name, image_data FROM image_generated WHERE id = ?`;
  const { results } = await c.env.DB_DATA.prepare(sql).bind(id).all();

  if (results.length === 0) {
    throw new HTTPException(404, { message: 'Image not found!' });
  }

  const imageData = results[0].image_data as ArrayBuffer;

  return c.body(Buffer.from(imageData), {
    headers: {
      'content-type': 'image/png'
    }
  });
});

app.get('/images', async (c) => {
  const limit = Number(c.req.query('limit')) || 20;

  const sql = `SELECT id, caption, image_name FROM image_generated ORDER BY created_at desc LIMIT ?`;
  const { results } = await c.env.DB_DATA.prepare(sql).bind(limit).all();

  const { origin } = requestInfo(c);
  results.forEach((res) => (res.image_url = `${origin}/image/${res.id}/view`));

  return c.json(results);
});

app.get('/images/:id', async (c) => {
  const id = c.req.param('id');

  if (!isUUID(id)) {
    throw new HTTPException(400, { message: 'Params not valid.' });
  }

  const sql = `SELECT id, caption, image_name FROM image_generated WHERE id = ?`;
  const { results } = await c.env.DB_DATA.prepare(sql).bind(id).all();

  if (results.length === 0) {
    throw new HTTPException(404, { message: 'Image not found!' });
  }

  const { origin } = requestInfo(c);
  results[0].image_url = `${origin}/image/${results[0].id}/view`;

  return c.json(results.at(0));
});

app.delete('/images/:id', async (c) => {
  const id = c.req.param('id');

  if (!isUUID(id)) {
    throw new HTTPException(400, { message: 'Params not valid.' });
  }

  const sql = `DELETE FROM image_generated WHERE id = ?`;
  await c.env.DB_DATA.prepare(sql).bind(id).run();

  return c.body(null, 204);
});

app.notFound((c) => c.json({ message: 'Page not found!' }, 404));

app.onError((err, c) => {
  const message = err.message ?? 'System error. Please try again later!';
  let statusCode: StatusCode = 500;

  if (err instanceof HTTPException) {
    statusCode = err.status;
  }

  return c.json({ message }, statusCode);
});

export default app;
