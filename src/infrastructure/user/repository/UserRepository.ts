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
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "./../types/IUserRepository";

@injectable()
export class UserRepository implements IUserRepository {
  private collection: Collection<Document>;
  constructor(
    @inject(tokens.DatabaseClient)
    public databaseClient: IDatabaseClient
  ) {
    this.collection = databaseClient.getInstance().collection("user");
  }

  public create(newUser: IUserInfo) {
    try {
      return this.collection.insertOne(newUser);
    } catch (error) {
      throw new Error();
    }
  }

  public async list() {
    try {
      const data = await this.collection.find().toArray();
      return data;
    } catch (error) {
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

export interface IUserInfo extends Document {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}
