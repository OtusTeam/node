import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  userCreate(user: any): { success: boolean } {
    console.log('service Mailer. Handle user', user);

    return { success: true };
  }
}
