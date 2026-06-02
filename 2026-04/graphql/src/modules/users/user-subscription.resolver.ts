import { Resolver, Subscription } from '@nestjs/graphql';
import { User } from './user.model';
import { UserEventsPubSub } from './user-events.pubsub';

@Resolver()
export class UserSubscriptionResolver {
  constructor(private readonly userEvents: UserEventsPubSub) {}

  @Subscription(() => User, {
    name: 'userAdded',
    resolve: (payload: { userAdded: User }) => payload.userAdded,
  })
  userAdded() {
    return this.userEvents.userAddedIterator();
  }
}
