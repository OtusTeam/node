import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface JwtUser {
  id: string;
  role?: string;
}

/**
 * Декоратор для извлечения текущего пользователя из request.user.
 * Использование: @User() user: JwtUser или @User('id') id: string
 */
export const User = createParamDecorator(
  (
    data: keyof JwtUser | undefined,
    ctx: ExecutionContext,
  ): JwtUser | string | undefined => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = (request as Request & { user?: JwtUser }).user;

    if (!user) {
      return undefined;
    }

    return data ? user[data] : user;
  },
);
