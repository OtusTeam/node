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

    const isCorrectToken = request.headers.token === 'password';

    if (!isCorrectToken) {
      return false;
    }

    request.user = {
      username: 'nik',
      role: Role.admin
    };

    if (!this.roles.includes(request.user.role)) {
      return false;
    }

    return true;
  }
}

// Basic Auth.
// JWT + Oauth.
