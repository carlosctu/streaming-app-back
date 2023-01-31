import { IUserInfo } from "../repository/UserRepository";
import { ObjectId } from "bson";
import {
  InsertOneResult,
  UpdateResult,
  DeleteResult,
  WithId,
  Document,
} from "mongodb";

export interface IUserRepository {
  create(userInfo: IUserInfo): Promise<InsertOneResult<Document>>;
  list(): Promise<WithId<Document>[]>;
  update(customerId: ObjectId): Promise<UpdateResult>;
  delete(customerId: ObjectId): Promise<DeleteResult>;
}
