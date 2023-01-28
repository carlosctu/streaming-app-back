import { MongoClient, Db, ConnectOptions } from "mongodb";
import { injectable } from "tsyringe";
import dotenv from "dotenv";

dotenv.config();

export interface IDatabaseClient {
  connect(): Promise<any>;
  close(): Promise<any>;
  getInstance(): Db;
}

@injectable()
export default class MongoDBClient implements IDatabaseClient {
  private client = new MongoClient(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeoutMS: 30000,
    keepAlive: true,
  } as ConnectOptions);
  private db: Db = this.client.db("streaming-app");

  public async connect(): Promise<void> {
    await this.client.connect();
  }
  public async close(): Promise<void> {
    await this.client.close();
  }
  public getInstance(): Db {
    return this.db;
  }
}
