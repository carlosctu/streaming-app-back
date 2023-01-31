import { IUserInfo } from "./../../../infrastructure/user/repository/UserRepository";
import { IUserService } from "./../../../infrastructure/user/types/IUserService";
import { tokens } from "./../../../di/tokens";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject, injectable } from "tsyringe";
import { IBaseController } from "../IBaseController";

// A técnica de injeção de dependencias nós ajuda a desacoplar
// alguns componentes de outros.
// Com ela alteramos todas as referencias de classes concretas
// para interfaces, invertendo o gráfico de dependendecias entre
// componentes.

// Um bom exemplo de porque utilizar, é a questão dos testes
// por exemplo:
// Para poder testar o CreateUserController, teriamos que passar pelo
// UserRepository, que teria que consultar no banco para realizar os
// tests, o que torna o processo lento.
// Com injeção de dependencias, podemos criar um MockUserRepository,
// a qual implementaria a interface (IUserRepository) e todos seus
// métodos, o que é bem mais rápido.

// Com o injectable podemos dizer que a classe pode receber
// injeção de dependencias através do uso de um container() ou resolver()
// passando o nome da classe a ser injetada
@injectable()
export class CreateUserController implements IBaseController {
  constructor(
    // Com o uso do registerSingleton na camada de DI, utilizamos
    // o inject para não precisarmos instanciar a classe UserService,
    // pois o parâmetro/token que o inject espera é o token de nosso
    // container que irá instanciar a classe para nós.
    @inject(tokens.UserService)
    private userService: IUserService
  ) {
    this.userService = userService;
  }
  async handle(req: Request, res: Response): Promise<Response> {
    const newUser = req.body as IUserInfo;
    try {
      const result = await this.userService.createUser(newUser);
      return res
        .status(httpStatus.CREATED)
        .send({ status: "success", data: result });
    } catch (error) {
      console.log(error)
      return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
