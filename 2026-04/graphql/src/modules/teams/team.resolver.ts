import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../users/user.model';
import { Team, TeamInput, TeamQuery } from './team.model';
import { TeamService } from './team.service';

@Resolver(() => TeamQuery)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => [TeamQuery], { name: 'teams', nullable: true })
  async getTeams() {
    return this.teamService.findAll();
  }

  @Query(() => TeamQuery, { name: 'team', nullable: true })
  async getTeamById(@Args('id', { type: () => Int }) id: number) {
    return this.teamService.findById(id);
  }

  @Mutation(() => TeamQuery, { name: 'createTeam' })
  async createTeam(@Args('data') input: TeamInput): Promise<Team> {
    return this.teamService.createTeam(input);
  }

  @Mutation(() => TeamQuery, { nullable: true })
  async addMember(
    @Args('teamId', { type: () => Int }) teamId: number,
    @Args('userId', { type: () => Int }) userId: number,
  ) {
    return this.teamService.addMember(teamId, userId);
  }

  @Mutation(() => TeamQuery, { nullable: true })
  async removeMember(
    @Args('teamId', { type: () => Int }) teamId: number,
    @Args('userId', { type: () => Int }) userId: number,
  ) {
    return this.teamService.removeMember(teamId, userId);
  }

  @ResolveField('members', () => [User], { nullable: true })
  async getMembers(@Parent() team: TeamQuery) {
    if (team.members?.length) {
      return team.members;
    }
    const full = await this.teamService.findById(team.id);
    return full?.members ?? [];
  }
}
