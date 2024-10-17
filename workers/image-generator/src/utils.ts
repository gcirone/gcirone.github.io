import { Buffer } from 'node:buffer';

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

  let imageBlob = new Uint8Array(receivedLength);
  let position = 0;

  for (let chunk of chunks) {
    imageBlob.set(chunk, position);
    position += chunk.length;
  }

  const buffer = Buffer.from(imageBlob);
  console.log('Buffer size:', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB');

  return buffer;
}
