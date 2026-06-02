import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Декоратор для указания допустимых ролей на маршруте.
 * Используется вместе с RolesGuard.
 *
 * @Example
 * @Roles('admin', 'moderator')
 * @Get('sensitive')
 * sensitive() { ... }
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
