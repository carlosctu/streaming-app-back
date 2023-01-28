import { ObjectId } from "mongodb";

export interface IUserService {
  createUser(): Promise<unknown>;
  listUsers(): Promise<unknown>;
  updateUser(customerId: ObjectId): Promise<unknown>;
  deleteUser(customerId: ObjectId): Promise<unknown>;
}
