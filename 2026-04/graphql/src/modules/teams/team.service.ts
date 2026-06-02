import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { UserService } from '../users/user.service';
import { Team, TeamInput } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  findAll() {
    return this.teamRepository.find({
      relations: ['members'],
    });
  }

  findById(id: number) {
    return this.teamRepository.findOne({
      where: { id },
      relations: ['members'],
    });
  }

  findByIds(ids: number[]) {
    return this.teamRepository.find({
      where: { id: In(ids) },
      relations: ['members'],
    });
  }

  createTeam(data: TeamInput) {
    const team = this.teamRepository.create(data);
    return this.teamRepository.save(team);
  }

  async addMember(teamId: number, userId: number) {
    const team = await this.findById(teamId);
    if (!team) return null;

    const user = await this.userService.findById(userId);
    if (user) {
      if (!team.members) team.members = [];
      team.members.push(user);
      await this.teamRepository.save(team);
    }

    return this.findById(teamId);
  }

  async removeMember(teamId: number, userId: number) {
    const team = await this.findById(teamId);
    if (!team?.members) return team;

    const index = team.members.findIndex((member) => member.id === userId);
    if (index >= 0) {
      team.members.splice(index, 1);
      await this.teamRepository.save(team);
    }

    return this.findById(teamId);
  }
}
