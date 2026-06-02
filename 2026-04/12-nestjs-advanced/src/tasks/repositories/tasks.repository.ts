import { Inject, Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from 'mongodb';
import type { Task, TaskInsert } from '../entities/task.entity';

const DB_NAME = 'nestjs-demo';
const COLLECTION = 'tasks';

@Injectable()
export class TasksRepository {
  constructor(@Inject(MongoClient) private readonly mongo: MongoClient) {}

  private get collection() {
    return this.mongo.db(DB_NAME).collection<Task>(COLLECTION);
  }

  async create(doc: TaskInsert): Promise<Task> {
    const { insertedId } = await this.collection.insertOne(
      doc as unknown as Task,
    );
    const inserted = await this.findById(insertedId.toString());
    if (!inserted) throw new Error('Inserted document not found');
    return inserted;
  }

  async findAll(): Promise<Task[]> {
    return this.collection.find().sort({ createdAt: -1 }).toArray();
  }

  async findById(id: string): Promise<Task | null> {
    return this.collection.findOne({ _id: new ObjectId(id) });
  }

  async update(
    id: string,
    update: Partial<TaskInsert> & { updatedAt: Date },
  ): Promise<Task | null> {
    const result = await this.collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: update },
      { returnDocument: 'after' },
    );
    return result ?? null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  }
}
