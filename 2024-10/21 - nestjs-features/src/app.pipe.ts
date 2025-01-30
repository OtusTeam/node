import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value, +value);
    console.log('metadata', metadata);

    // transform - преобразовываем данные
    // validation - валидацию, если неверно, но throw ValidationError
    return +value;
  }
}
