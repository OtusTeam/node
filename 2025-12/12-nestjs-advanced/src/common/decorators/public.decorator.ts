import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Декоратор для маршрутов, не требующих авторизации.
 * Guard может проверять эту метаданную и пропускать проверку.
 *
 * @Example
 * @Public()
 * @Get('health')
 * health() { return 'ok'; }
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
