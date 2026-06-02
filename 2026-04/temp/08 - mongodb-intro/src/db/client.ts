import { MongoClient, Db } from 'mongodb';

import config from './config.js';

export class DatabaseClient {
  private static instance: DatabaseClient;
  private client: MongoClient;

  public db: Db;

  private constructor() {
    this.client = new MongoClient(config.uri);
    this.db = this.client.db(config.db);
  }

  public static getInstance(): DatabaseClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  public async connect() {
    await this.client.connect();
  }

  public async disconnect() {
    await this.client.close();
  }
}
