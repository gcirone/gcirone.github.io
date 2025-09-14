import type { Manifest, ManifestChunk } from 'vite';

export function getManifest(): Manifest {
  const manifestImport = import.meta.glob<{ default: Manifest }>(
    '/dist/client/.vite/manifest.json',
    { eager: true }
  );

  return Object.values(manifestImport).at(0)?.default || {};
}

export function getAssetManifest(asset: string): ManifestChunk | undefined {
  const manifest = getManifest();

  return manifest[asset.replace(/^\//, '')];
}
