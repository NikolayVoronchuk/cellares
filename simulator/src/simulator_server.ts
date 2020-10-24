import express from 'express';
import http from 'http';

import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './instruments';
import { applyMiddleware, applyRoutes } from './utils';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});
process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 4003 } = process.env;
const simulator_server = http.createServer(router);

simulator_server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

