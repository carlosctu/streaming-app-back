import "reflect-metadata";
import { User } from "@/protocols";
import { injectable, inject } from "tsyringe";
import { Customer } from "../user/model/CustomerModel";
import { UserRepository as UserRepository } from "../CustomerRepository";
import { duplicatedEmailError } from "./errors";

//Clase pode receber injeções desde qualquer canto com o uso do
// container ou resolver do tsyringe
export interface ICreateUserService {
  execute(userInfo: User): Promise<Customer>;
}

@injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    //Aqui usando o @inject estamos passando o parametro que definimos
    //no container do UserRepository, fazendo com que não possa
    //ser mais instanciado, já que o registerSingleton fará isso por nós.
    @inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}
  public async execute(userInfo: User): Promise<Customer> {
    await this.validateUniqueEmail(userInfo.email)
    return this.userRepository.createUser(userInfo)
  }

  private async validateUniqueEmail(email: string) {
    //TODO validate existing email
    const userWithSameEmail = false;
    if (userWithSameEmail) {
      throw duplicatedEmailError();
    }
  }
}
