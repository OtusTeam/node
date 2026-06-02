import { NextFunction, Request, Response } from 'express';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  // лучше не передавать контект в request
  req.startTimestamp = start;
  // req.userId
  // Если заморочиться, то добавлять туда requestId
  // Вместо in-memory хранилища использовать shared, аля redis

  res.on('finish', () => {
    const duration = Date.now() - start;
    const log = `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`;
    console.log(log);
  });

  next();
}
