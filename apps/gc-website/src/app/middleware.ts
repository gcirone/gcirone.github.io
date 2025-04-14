import { deviceType } from '~/app/middleware/device-type';
import { serverLogger } from '~/app/middleware/server-logger';
import { cacheControl } from '~/app/middleware/cache-control';

export const middleware = [deviceType, serverLogger, cacheControl];
