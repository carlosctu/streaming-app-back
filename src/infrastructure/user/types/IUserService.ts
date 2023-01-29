import { ObjectId } from "mongodb";
import { UserInfo } from "../repository/UserRepository";
import { WithId } from "mongodb";

export interface IUserService {
  createUser(): Promise<UserInfo>;
  listUsers(): Promise<WithId<Document>[]>;
  updateUser(customerId: ObjectId): Promise<UserInfo>;
  deleteUser(customerId: ObjectId): Promise<UserInfo>;
}
