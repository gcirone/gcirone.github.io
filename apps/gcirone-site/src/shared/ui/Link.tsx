import { getAssetManifest } from '../lib/manifet';
import type { JSX } from 'hono/jsx';

export default function Link(options: JSX.IntrinsicElements['link']) {
  const { href, rel, ...rest } = options;

  if (import.meta.env.DEV && rel?.includes('preload')) {
    return <></>;
  }

  if (href && href.at(0) === '/') {
    if (import.meta.env.PROD) {
      const assetInManifest = getAssetManifest(href);

      if (assetInManifest?.file) {
        return <link rel={rel} href={'/' + assetInManifest.file} {...rest}></link>;
      }
    }
  }

  return <link rel={rel} href={href} {...rest} />;
}
