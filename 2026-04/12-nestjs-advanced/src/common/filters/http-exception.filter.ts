import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger
} from '@nestjs/common';
import { Request, Response } from 'express';

export interface ErrorResponse {
  success: false;
  statusCode: number;
  message: string;
  error?: string;
  errors?: unknown;
  path: string;
  timestamp: string;
}

function ensureString(value: string | undefined): string {
  return value ?? '';
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  public catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { statusCode, body } = this.normalize(exception, request);

    this.logger.warn(
      `${request.method} ${request.url} ${statusCode} - ${body.message}`,
    );

    response.status(statusCode).json(body);
  }

  private normalize(
    exception: unknown,
    request: Request,
  ): { statusCode: number; body: ErrorResponse } {
    const timestamp = new Date().toISOString();
    const path = ensureString((request as Request & { url?: string }).url);

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      const message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : (exceptionResponse as { message?: string | string[] }).message;
      const error: string | undefined =
        typeof exceptionResponse === 'object' &&
          exceptionResponse !== null &&
          'error' in exceptionResponse
          ? (exceptionResponse as { error?: string }).error
          : undefined;
      const errors =
        typeof exceptionResponse === 'object' &&
          exceptionResponse !== null &&
          'errors' in exceptionResponse
          ? (exceptionResponse as { errors?: unknown }).errors
          : undefined;

      return {
        statusCode: status,
        body: {
          success: false,
          statusCode: status,
          message: Array.isArray(message) ? message.join(', ') : ensureString(message),
          error,
          errors,
          path,
          timestamp,
        },
      };
    }

    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof Error ? exception.message : 'Internal server error';

    if (exception instanceof Error && exception.stack) {
      this.logger.error(exception.stack);
    }

    return {
      statusCode,
      body: {
        success: false,
        statusCode,
        message: message ?? 'Internal server error',
        error: 'Internal Server Error',
        path,
        timestamp,
      },
    };
  }
}
