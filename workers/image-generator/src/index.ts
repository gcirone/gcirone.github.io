import { bufferFromStream } from './utils';
import { snakeCase } from 'lodash-es';

export default {
  async fetch(request, env, ctx): Promise<Response> {
    if (request.url.endsWith('favicon.ico')) {
      return new Response(null, { status: 204 });
    }

    const textPrompt = `landmark of Italy`;

    const textOutput = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      prompt: `${textPrompt}. No extra info. Just the name.`
    });

    const imagePrompt = (textOutput as Record<string, string>).response;
    const imageOutput = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', { prompt: imagePrompt });

    const buffer = await bufferFromStream(imageOutput);

    const sqlInsert = `INSERT INTO image_generated (id, caption, image_name, image_data) VALUES (?, ?, ?, ?)`;
    await env.DB_DATA.prepare(sqlInsert)
      .bind(crypto.randomUUID(), textPrompt, `${snakeCase(imagePrompt)}.png`, buffer)
      .run();

    const sql = `SELECT id, caption, image_name FROM image_generated ORDER BY created_at desc LIMIT 10`;
    const res = await env.DB_DATA.prepare(sql).all();

    return Response.json({
      images: res.results,
      headers: {
        xRealIp: request.headers.get('x-real-ip'),
        xForwardedFor: request.headers.get('x-forwarded-for'),
        cfConnectingIp: request.headers.get('cf-connecting-ip'),
        userAgent: request.headers.get('user-agent'),
        host: request.headers.get('host'),
        refer: request.headers.get('refer')
      },
      longitude: request.cf?.longitude,
      latitude: request.cf?.latitude,
      continent: request.cf?.continent,
      city: request.cf?.city,
      region: request.cf?.region,
      regionCode: request.cf?.regionCode,
      timezone: request.cf?.timezone,
      postalCode: request.cf?.postalCode,
      colo: request.cf?.colo,
      country: request.cf?.country
    });
  }
} satisfies ExportedHandler<Env>;
