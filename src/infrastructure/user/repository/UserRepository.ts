import "reflect-metadata";
import { IDatabaseClient } from "@/infrastructure/db/db";
import { tokens } from "@/di/tokens";
import { ObjectId } from "bson";
import {
  Collection,
  InsertOneResult,
  Document,
  DeleteResult,
  UpdateResult,
  WithId,
} from "mongodb";
import { inject } from "tsyringe";
import { IUserRepository } from "./../types/IUserRepository";

export class UserRepository implements IUserRepository {
  private collection: Collection<Document>;
  constructor(
    @inject(tokens.DatabaseClient)
    public databaseClient: IDatabaseClient
  ) {
    this.collection = databaseClient.getInstance().collection("user");
  }

  public async create(userInfo: UserInfo): Promise<InsertOneResult<Document>> {
    return this.collection.insertOne(userInfo);
  }

  public async list(): Promise<WithId<Document>[]> {
    try {
      const data = this.collection.find().toArray();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  public async update(customerId: ObjectId): Promise<UpdateResult> {
    throw new Error("Method not implemented.");
  }

  public async delete(customerId: ObjectId): Promise<DeleteResult> {
    return this.collection.deleteOne({ _id: customerId });
  }
}

export interface UserInfo extends Document {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}
