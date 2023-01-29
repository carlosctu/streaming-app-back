import { IUserRepository } from "./../../../infrastructure/user/types/IUserRepository";
import {
  WithId,
  Document,
  DeleteResult,
  InsertOneResult,
  UpdateResult,
} from "mongodb";
import { injectable, inject } from "tsyringe";
import { ObjectId } from "bson";
import { tokens } from "@/di/tokens";
import { IUserService } from "../../../infrastructure/user/types/IUserService";
import {
  UserInfo,
  UserRepository,
} from "@/infrastructure/user/repository/UserRepository";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(tokens.UserRepository)
    private userRepository: IUserRepository
  ) {
    this.userRepository = userRepository;
  }

  public async createUser() {
    const data = await this.userRepository.create({} as UserInfo);
    return this.userRepository.create(data as any);
  }
  public async listUsers() {
    return this.userRepository.list();
  }
  public async updateUser(customerId: ObjectId) {
    return this.userRepository.update(customerId);
  }
  public async deleteUser(customerId: ObjectId) {
    return this.userRepository.delete(customerId);
  }
}
