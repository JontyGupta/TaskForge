import { Request, Response } from 'express';
import { sendResponse } from '../../core/http/send-response.js';

export class HealthController {
  public check(_req: Request, res: Response): void {
    sendResponse(res, {
      statusCode: 200,
      message: 'Server is healthy',
      data: {
        status: 'UP',
      },
    });
  }
}