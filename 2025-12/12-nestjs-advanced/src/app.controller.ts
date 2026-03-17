import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { Public } from './common/decorators/public.decorator';
import { ApiVersion } from './common/decorators/api-version.decorator';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

@Controller()
@UseInterceptors(TransformInterceptor)
export class AppController {
  @Get('health')
  @Public()
  health() {
    return { status: 'ok' };
  }

  @Get('slow')
  @Public()
  @UseInterceptors(new TimeoutInterceptor(2000))
  slow() {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ message: 'Done after 2s' }), 1500),
    );
  }

  @Get('versioned')
  @Public()
  @ApiVersion('1')
  versioned() {
    return { version: '1', message: 'Versioned endpoint' };
  }
}
