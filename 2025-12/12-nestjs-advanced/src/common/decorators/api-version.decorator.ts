import { SetMetadata } from '@nestjs/common';

export const API_VERSION_KEY = 'apiVersion';

/**
 * Декоратор для версионирования API (можно использовать с Guard или Interceptor).
 *
 * @Example
 * @ApiVersion('2')
 * @Get('users')
 * getUsers() { ... }
 */
export const ApiVersion = (version: string) =>
  SetMetadata(API_VERSION_KEY, version);
