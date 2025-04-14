// import pino, { stdTimeFunctions } from 'pino';
//
// const isServer = typeof window === 'undefined';
// const isDevelopment = process.env.NODE_ENV !== 'production';
//
// const logLevel = process.env.LOG_LEVEL || process.env.NEXT_PUBLIC_LOG_LEVEL || 'error';
// const levelFormatter = (label: string) => ({ level: label });
// const jsonBowserSpace = isDevelopment ? 2 : 0;
// const timestamp = stdTimeFunctions.isoTime;
// const messageKey = 'message';
// const base = {};
//
// export const logger = pino({
//   level: logLevel,
//   messageKey,
//   timestamp,
//   base,
//
//   formatters: {
//     level: levelFormatter
//   },
//
//   ...(isDevelopment && {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true
//       }
//     }
//   }),
//
//   ...(isServer && {
//     browser: {
//       write: {
//         debug: (obj) => console.log(JSON.stringify(obj, null, jsonBowserSpace)),
//         error: (obj) => console.error(JSON.stringify(obj, null, jsonBowserSpace)),
//         info: (obj) => console.log(JSON.stringify(obj, null, jsonBowserSpace)),
//         warn: (obj) => console.warn(JSON.stringify(obj, null, jsonBowserSpace))
//       },
//       formatters: {
//         level: levelFormatter,
//         log({ level, time, ...details }) {
//           return { level, time, ...details };
//         }
//       }
//     }
//   })
// });
