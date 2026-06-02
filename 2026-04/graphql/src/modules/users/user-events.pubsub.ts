import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { User } from './user.model';

@Injectable()
export class UserEventsPubSub {
  private readonly pubSub = new PubSub();
  private readonly channel = 'userAdded';

  publishUserAdded(user: User) {
    return this.pubSub.publish(this.channel, { userAdded: user });
  }

  userAddedIterator() {
    return this.pubSub.asyncIterator(this.channel);
  }
}
