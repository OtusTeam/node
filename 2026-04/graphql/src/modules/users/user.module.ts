import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserSubscriptionResolver } from './user-subscription.resolver';
import { UserEventsPubSub } from './user-events.pubsub';
import { TeamModule } from '../teams/team.module';
import { UserTeamsLoaderService } from './user-teams.loader';

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    forwardRef(() => TeamModule),
  ],
  providers: [
    UserService,
    UserEventsPubSub,
    UserSubscriptionResolver,
    UserResolver,
    UserTeamsLoaderService,
  ],
  exports: [ UserService ],
  controllers: [ UserController ],
})
export class UserModule {
}
