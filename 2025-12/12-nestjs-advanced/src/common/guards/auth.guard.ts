import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

/**
 * Простой Guard: проверяет наличие заголовка Authorization (Bearer token).
 * Маршруты с декоратором @Public() пропускаются без проверки.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid Authorization header');
    }

    const token = authHeader.slice(7);
    if (!token) {
      throw new UnauthorizedException('Token is required');
    }

    // Демо: из токена извлекаем "роль" (например, admin или user)
    const role = token.startsWith('admin-') ? 'admin' : 'user';
    (request as Request & { user?: { id: string; role: string } }).user = {
      id: 'user-from-token',
      role,
    };

    return true;
  }
}
