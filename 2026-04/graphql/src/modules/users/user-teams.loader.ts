import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
import { In, Repository } from 'typeorm';
import { TeamQuery } from '../teams/team.model';
import { User } from './user.model';

@Injectable({ scope: Scope.REQUEST })
export class UserTeamsLoaderService {
  readonly teamsByUserId: DataLoader<number, TeamQuery[]>;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.teamsByUserId = new DataLoader<number, TeamQuery[]>(async (userIds: readonly number[]) => {
      console.log('userIds', userIds)

      const rows = await this.userRepository.find({
        where: { id: In([...userIds]) },
        relations: ['teams'],
      });
      const byId = new Map(rows.map((u) => [u.id, u.teams ?? []]));
      return userIds.map((id) => byId.get(id) ?? []);
    });
  }
}
