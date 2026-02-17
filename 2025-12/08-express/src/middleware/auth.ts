import type { Request, Response, NextFunction } from 'express';
import { error } from '../utils/response.js';

const API_KEY = process.env.API_KEY || 'demo-secret-key';

/**
 * Простая авторизация по API-ключу.
 * Ожидает заголовок: Authorization: Bearer <key> или X-API-Key: <key>
 */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const bearer = req.headers.authorization;
  const apiKey = req.headers['x-api-key'];

  const token = bearer?.startsWith('Bearer ')
    ? bearer.slice(7)
    : typeof apiKey === 'string'
      ? apiKey
      : undefined;

  if (!token || token !== API_KEY) {
    res.status(401).json(error('Unauthorized', 401));
    return;
  }

  next();
}
