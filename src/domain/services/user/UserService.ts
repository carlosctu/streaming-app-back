import "reflect-metadata";
import { injectable, inject } from "tsyringe";
import { WithId } from "mongodb";
import { ObjectId } from "bson";
import { tokens } from "@/di/tokens";
import { IUserRepository } from "../../../infrastructure/user/types/IUserRepository";
import { IUserService } from "../../../infrastructure/user/types/IUserService";
import { UserInfo } from "@/infrastructure/user/repository/UserRepository";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(tokens.UserRepository)
    private userRepository: IUserRepository
  ) {
    this.userRepository = userRepository;
  }
  public createUser(): Promise<UserInfo> {
    throw new Error("Method not implemented.");
  }
  public async listUsers(): Promise<any> {
    return this.userRepository.list();
  }
  public updateUser(customerId: ObjectId): Promise<UserInfo> {
    throw new Error("Method not implemented.");
  }
  public deleteUser(customerId: ObjectId): Promise<UserInfo> {
    throw new Error("Method not implemented.");
  }
}
