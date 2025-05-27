import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
  UseGuards,
  Request
} from '@nestjs/common';

import { ValidationPipe } from '../app.pipe';
import { CatDto } from './cats.dto';
import { AuthGuard, Role } from '../auth.guard';

@UseGuards(new AuthGuard([Role.user]))
@Controller('cats')
export class CatsController {
  private cats: CatDto[];

  constructor() {
    this.cats = [
      { id: 1, name: 'barsik' },
      { id: 2, name: 'matroskin' },
    ];
  }

  @Get('/list')
  list(): CatDto[] {
    // // Или HttpException
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // // Или свой Custom error
    // throw new Error('my-exception');

    return this.cats;
  }

  @Get('/:id')
  instance(@Param('id', ValidationPipe) id, @Request() req): CatDto {
    console.log(id);
    console.log(req.user);

    return this.cats.find((cat) => cat.id === parseInt(id));
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() cat: CatDto): void {
    this.cats.push(cat);
  }
}

// god decorator
// В который я просто прокидывываю опции, какие декораторы включить
