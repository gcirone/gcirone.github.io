import { getAssetManifest } from '../lib/manifet';
import type { JSX } from 'react';

export default function Script(options: JSX.IntrinsicElements['script']) {
  const { src, ...rest } = options;

  if (src && src.at(0) === '/') {
    if (import.meta.env.PROD) {
      const assetInManifest = getAssetManifest(src);

      if (assetInManifest?.file) {
        return <script src={'/' + assetInManifest.file} {...rest}></script>;
      }
    }
  }

  return <script src={src} {...rest} />;
}
