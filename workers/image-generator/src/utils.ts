import { Buffer } from 'node:buffer';
import { Context } from 'hono';

export async function bufferFromStream(stream: ReadableStream<Uint8Array>) {
  let receivedLength = 0;
  let chunks = [];

  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;
  }

  let blob = new Uint8Array(receivedLength);
  let position = 0;

  for (let chunk of chunks) {
    blob.set(chunk, position);
    position += chunk.length;
  }

  const buffer = Buffer.from(blob);
  console.log('buffer:size', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB');

  return buffer;
}

export function isUUID(id: string): boolean {
  const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  return regex.test(id);
}

export function requestInfo(c: Context) {
  const { origin, pathname } = new URL(c.req.url);

  const xRealIp = c.req.header('x-real-ip');
  const cfConnectingIp = c.req.header('cf-connecting-ip');
  const xForwardedFor = c.req.header('x-forwarded-for');

  return {
    url: c.req.url,
    origin: origin,
    pathname: pathname,
    method: c.req.method,
    headers: {
      userAgent: c.req.header('user-agent'),
      userIp: xRealIp || cfConnectingIp || xForwardedFor,
      host: c.req.header('host'),
      refer: c.req.header('refer')
    },
    geo: {
      longitude: c.req.raw.cf?.longitude,
      latitude: c.req.raw.cf?.latitude,
      city: c.req.raw.cf?.city,
      postalCode: c.req.raw.cf?.postalCode,
      region: c.req.raw.cf?.region,
      regionCode: c.req.raw.cf?.regionCode,
      colo: c.req.raw.cf?.colo,
      country: c.req.raw.cf?.country,
      continent: c.req.raw.cf?.continent,
      timezone: c.req.raw.cf?.timezone,
      asOrganization: c.req.raw.cf?.asOrganization
    }
  };
}

export const baseHTML = (content: string | Promise<string>) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Generator Playground</title>
    <style>
      body { background: #f5e8f5; font-family: "Helvetica", sans-serif; color: #716262; margin: 1rem; }
      a { color: #0c0b0b; text-decoration: underline; }
      input, button { padding: .4rem .8rem; background: #978e97; border: 0; color: #f5e8f5; }
      input::placeholder { color: #d1c7d1; }
      fieldset div { padding: .2rem .4rem }
    </style>
  </head>
  <body>
    ${content}
    <script>
      window.addEventListener('load', () => {
        console.log('on load');
      })
    </script>
  </body>
</html>
`;
};
