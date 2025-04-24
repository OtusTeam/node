import { Request, Response } from 'express';
import { UserService } from './service.js';

export class UsersCtrl {
  private service = new UserService();

  public async registerUser(req: Request, res: Response) {
    try {
      const user = await this.service.register(req.body);
      res.status(201).json(user);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }

  public async getUsers(_: Request, res: Response) {
    const users = await this.service.getAll();
    res.json(users);
  }

  public async getUser(req: Request, res: Response) {
    const user = await this.service.getById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  }

  public async updateUser(req: Request, res: Response) {
    const user = await this.service.update(req.params.id, req.body);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  }

  public async deleteUser(req: Request, res: Response) {
    const success = await this.service.remove(req.params.id);
    if (success) res.json({ message: 'Deleted successfully' });
    else res.status(404).json({ message: 'User not found' });
  }
}
