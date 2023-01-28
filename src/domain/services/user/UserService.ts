import { IUserRepository } from "./../../../infrastructure/user/types/IUserRepository";
import "reflect-metadata";
import { IUserService } from "./../../../infrastructure/user/types/IUserService";
import { injectable, inject } from "tsyringe";
import { ObjectId } from "mongodb";
import { tokens } from "@/di/tokens";

@injectable()
export class CreateUserService implements IUserService {
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
