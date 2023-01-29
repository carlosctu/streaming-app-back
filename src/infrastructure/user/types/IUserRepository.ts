import { UserInfo } from "../repository/UserRepository";
import {
  ObjectId,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
  WithId,
  Document,
} from "mongodb";

export interface IUserRepository {
  create(userInfo: UserInfo): Promise<InsertOneResult<Document>>;
  list(): Promise<WithId<Document>[]>;
  update(customerId: ObjectId): Promise<UpdateResult>;
  delete(customerId: ObjectId): Promise<DeleteResult>;
}
