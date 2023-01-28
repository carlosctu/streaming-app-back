import { IDatabaseClient } from "@/infrastructure/db/db";
import { tokens } from "@/di/tokens";
import { ObjectId } from "bson";
import {
  Collection,
  InsertOneResult,
  Document,
  DeleteResult,
  WithId,
} from "mongodb";
import { inject } from "tsyringe";
import { IUserRepository } from "./../types/IUserRepository";

export class UserRepository implements IUserRepository {
  private collection: Collection<Document>;
  constructor(
    @inject(tokens.DatabaseClient)
    private databaseClient: IDatabaseClient
  ) {
    this.collection = databaseClient.getInstance().collection("user");
  }

  async create(userInfo: UserInfo): Promise<InsertOneResult<Document>> {
    return this.collection.insertOne(userInfo);
  }

  async list(): Promise<WithId<Document>[]> {
    return this.collection.find().toArray();
  }

  async update(customerId: ObjectId): Promise<unknown> {
    throw new Error("Method not implemented.");
  }

  async delete(customerId: ObjectId): Promise<DeleteResult> {
    return this.collection.deleteOne({ _id: customerId });
  }
}

export interface UserInfo extends Document {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}
