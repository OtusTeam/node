import { DatabaseClient } from '../../db/client.js';
import { User } from './model.js';
import { ObjectId } from 'mongodb';

export class UserRepository {
  private collection = DatabaseClient.getInstance().db.collection<User>('users');

  public async findAll(): Promise<User[]> {
    return this.collection.find().toArray();
  }

  public async findById(id: string): Promise<User | null> {
    return this.collection.findOne({ _id: new ObjectId(id) });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.collection.findOne({ email });
  }

  public async create(user: User): Promise<User> {
    const result = await this.collection.insertOne(user);

    return { ...user, _id: result.insertedId };
  }

  public async update(id: string, data: Partial<User>): Promise<User | null> {
    await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    return this.findById(id);
  }

  public async delete(id: string): Promise<boolean> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  }
}
