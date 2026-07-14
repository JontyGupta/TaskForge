import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app-error.js';
import { logger } from '../logger/logger.js';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error(err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: {
        code: 'APPLICATION_ERROR',
      },
    });

    return;
  }

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: {
      code: 'INTERNAL_SERVER_ERROR',
    },
  });
}