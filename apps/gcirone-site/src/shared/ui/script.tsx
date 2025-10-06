import { getAssetManifest } from '../lib/manifet';
import type { JSX } from 'hono/jsx';

export default function Script(options: JSX.IntrinsicElements['script']) {
  const { src, ...props } = options;

  if (src && src.at(0) === '/') {
    if (import.meta.env.PROD) {
      const assetInManifest = getAssetManifest(src);

      if (assetInManifest?.file) {
        return <script src={'/' + assetInManifest.file} {...props}></script>;
      }
    }
  }

  return <script src={src} {...props} />;
}
