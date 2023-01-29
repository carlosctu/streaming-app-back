import "reflect-metadata";
import { injectable, inject } from "tsyringe";
import { ObjectId } from "mongodb";
import { tokens } from "@/di/tokens";
import { IUserRepository } from "../../../infrastructure/user/types/IUserRepository";
import { IUserService } from "../../../infrastructure/user/types/IUserService";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(tokens.UserRepository)
    private userRepository: IUserRepository
  ) {
    this.userRepository = userRepository;
  }
  createUser(): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
  listUsers(): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
  updateUser(customerId: ObjectId): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
  deleteUser(customerId: ObjectId): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
