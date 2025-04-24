import { UserRepository } from './repository.js';
import { User } from './model.js';

export class UserService {
  private repository = new UserRepository();

  async register(data: User): Promise<User> {
    const existing = await this.repository.findByEmail(data.email);
    if (existing) {
      throw new Error('User already exists');
    }
    return this.repository.create(data);
  }

  async getAll(): Promise<User[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<User | null> {
    return this.repository.findById(id);
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    return this.repository.update(id, data);
  }

  async remove(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
