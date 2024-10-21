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
    envs: {
      apiToken: c.env.API_TOKEN
    },
    headers: {
      userAgent: c.req.header('user-agent'),
      host: c.req.header('host'),
      refer: c.req.header('refer'),
      ip: xRealIp || cfConnectingIp || xForwardedFor
    },
    geo: {
      longitude: c.req.raw.cf?.longitude,
      latitude: c.req.raw.cf?.latitude,
      city: c.req.raw.cf?.city,
      postalCode: c.req.raw.cf?.postalCode,
      region: c.req.raw.cf?.region,
      regionCode: c.req.raw.cf?.regionCode,
      area: c.req.raw.cf?.colo,
      country: c.req.raw.cf?.country,
      continent: c.req.raw.cf?.continent,
      timezone: c.req.raw.cf?.timezone
    }
  };
}
