import { Injectable, Scope } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TeamQuery } from '../teams/team.model';
import { UserEventsPubSub } from './user-events.pubsub';
import { UserTeamsLoaderService } from './user-teams.loader';
import { User, UserInput } from './user.model';
import { UserService } from './user.service';

const count = 0;

@Injectable({ scope: Scope.REQUEST })
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly userTeamsLoader: UserTeamsLoaderService,
    private readonly userEvents: UserEventsPubSub,
  ) {}

  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = await this.userService.createUser(input);
    await this.userEvents.publishUserAdded(user);
    return user;
  }

  @ResolveField('teams', () => [TeamQuery], { nullable: false })
  async getTeams(@Parent() user: User) {
    //  console.log('call getTeams', user.id);
    // Вместо выполнения нескольких отдельных запросов.
    // Он накапливает уникальные ключи и выполняет их
    // пакетом.
    // console.log('user', user);
    // console.log('count', ++count);

    // console.log('teams resolve');

    // return await this.userTeamsLoader.load(user.id);


    // return await user.teams;

    return this.userTeamsLoader.teamsByUserId.load(user.id);
  }
}
