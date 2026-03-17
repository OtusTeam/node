import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get db(): { url: string } {
    return {
      url: process.env.MONGO_URI ?? 'mongodb://localhost:27017/nestjs-demo',
    };
  }

  get port(): number {
    return parseInt(process.env.PORT ?? '3001', 10);
  }
}
