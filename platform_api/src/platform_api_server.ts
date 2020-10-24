import express from 'express';
import http from 'http';

import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';
// import { initDependencies } from './config/index';
import { applyMiddleware, applyRoutes } from './utils';
// import {logger} from "./config/logger";

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});
process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

// This part would go with logging in place
// process.on('uncaughtException', (e) => {
//   logger.error({
//     message: `uncaughtException`,
//     extra: e,
//   });
//   process.exit(1);
// });
//
// process.on('unhandledRejection', (e) => {
//   logger.error({
//     message: `unhandledRejection`,
//     extra: e,
//   });
//   process.exit(1);
// });

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 4002 } = process.env;
const platform_api_server = http.createServer(router);

platform_api_server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

// This part would go with logging in place
// async function start() {
//   await initDependencies();
//   platform_api_server.listen(PORT, () =>
//       logger.info({
//         message: `Server is running http://localhost:${PORT}...`,
//       }),
//   );
// }
//
// start();


