import { Request, Response } from 'express';

export class HealthController {
  public check(_req: Request, res: Response): void {
    res.status(200).json({
      success: true,
      message: 'Server is healthy',
      data: {
        status: 'UP',
      },
    });
  }
}