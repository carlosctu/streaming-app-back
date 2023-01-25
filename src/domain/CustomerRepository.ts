import { Customer } from "@domain/user/model/CustomerModel";
import { User } from "@/protocols";

export interface IUserRepository {
  createUser(userInfo: User): Promise<any>;
}

export class UserRepository implements IUserRepository {
  createUser(userInfo: User): Promise<any> {
    throw new Error("Method not implemented.");
  }

  // createUser(customerInfo: User): User {
  //   //TODO: create user on database
  //   return customerInfo;
  // }
}


