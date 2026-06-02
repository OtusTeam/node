import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

/**
 * Универсальный Pipe для валидации через Zod.
 * Использование: @UsePipes(new ZodValidationPipe(createTaskSchema))
 * или через параметр: @Body(new ZodValidationPipe(createTaskSchema)) body: CreateTaskDto
 */
@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) { }

  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const result = this.schema.safeParse(value);

    console.log(metadata);

    if (result.success) {
      return result.data;
    }

    const error = result.error as ZodError;
    const messages = error.errors.map((e) => ({
      path: e.path.join('.'),
      message: e.message,
    }));

    throw new BadRequestException({
      message: 'Validation failed',
      errors: messages,
    });
  }
}
