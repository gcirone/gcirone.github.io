// @ts-expect-error type
import type { Config } from '@react-router/dev/config';

// @ts-expect-error type
declare module 'react-router' {
  interface Future {
    unstable_middleware: true;
  }
}

export default {
  appDirectory: 'src/app',
  ssr: true,

  async prerender() {
    return ['/contact'];
  },

  future: {
    // unstable_optimizeDeps: true,
    // unstable_viteEnvironmentApi: true,
    unstable_splitRouteModules: 'enforce',
    unstable_middleware: true
  }
} satisfies Config;
