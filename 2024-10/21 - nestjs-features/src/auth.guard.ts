import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export enum Role {
  admin = 'admin',
  user = 'user'
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private roles: Role[]) {
    console.log('this.roles', this.roles);
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // token -> user

    console.log('this.roles', this.roles);
    console.log('request.headers.token', request.headers.token);

    request.user = {
      username: 'nik'
    };

    return request.headers.token === 'password';
  }
}

// Basic Auth.
// JWT + Oauth.
