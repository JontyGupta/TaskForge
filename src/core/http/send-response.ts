import { Response } from 'express';

interface SendResponseOptions<T> {
  statusCode: number;
  message: string;
  data?: T;
}

export function sendResponse<T>(
  res: Response,
  options: SendResponseOptions<T>,
): Response {
  const { statusCode, message, data } = options;

  return res.status(statusCode).json({
    success: true,
    message,
    data: data ?? null,
  });
}