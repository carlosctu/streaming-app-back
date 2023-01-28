import { ObjectId } from "mongodb";
import { UserInfo } from "../repository/UserRepository";
import { InsertOneResult, DeleteResult, WithId, Document } from "mongodb";

export interface IUserRepository {
  create(userInfo: UserInfo): Promise<InsertOneResult<Document>>;
  list(): Promise<WithId<Document>[]>;
  update(customerId: ObjectId): Promise<unknown>;
  delete(customerId: ObjectId): Promise<DeleteResult>;
}
