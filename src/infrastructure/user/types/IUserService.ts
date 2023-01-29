import { ObjectId } from "bson";
import {
  WithId,
  Document,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
} from "mongodb";

export interface IUserService {
  createUser(): Promise<InsertOneResult<Document>>;
  listUsers(): Promise<WithId<Document>[]>;
  updateUser(customerId: ObjectId): Promise<UpdateResult>;
  deleteUser(customerId: ObjectId): Promise<DeleteResult>;
}
