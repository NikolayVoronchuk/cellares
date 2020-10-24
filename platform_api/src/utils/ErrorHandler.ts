import { NextFunction, Response } from 'express';

import { HTTP404Error, HTTPClientError } from '../utils/httpErrors';
// import { logger } from '../config/logger';

export const notFoundError = () => {
  throw new HTTP404Error('Method not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    console.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  console.error(err);
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('Internal Server Error');
  } else {
    res.status(500).send(err.stack);
  }
};

// This part would be added for logging errors and warnings
// export const clientError = (err: Error, res: Response, next: NextFunction) => {
//   if (err instanceof HTTPClientError) {
//     let { message, statusCode } = err;
//     logger.warn({
//       message,
//     });
//     res.status(statusCode).send(message);
//   } else {
//     next(err);
//   }
// };
//
// export const serverError = (err: Error, res: Response, next: NextFunction) => {
//   if (process.env.NODE_ENV === 'production') {
//     res.status(500).send('Internal Server Error');
//   } else {
//     res.status(500).send(err.stack);
//   }
// };
