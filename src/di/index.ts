import { UserController } from "../application/controllers/UserController";
import controllerAdapterMiddleware from "../application/middlewares/ControllerAdapterMiddleware";
import {
  ICreateUserService,
  CreateUserService,
} from "../domain/services/UserService";
import { ControllerAdapterType } from "@/protocols";
import {
  IUserRepository,
  UserRepository,
} from "../domain/CustomerRepository";
import { container } from "tsyringe";
import { DocsController } from "@/presentation/docs/DocsController";
import { DocsService } from "@/presentation/docs/DocsService";

//Fazendo uma injeção, o registerSingleton nós ajuda a instanciar a classe
//e faz com que somente tenhamos uma instancia dela em todo nosso projeto.
//Evitando assim o uso do new na UserRepository em algum outro lugar do codigo.
const childContainer = container.createChildContainer();

childContainer.registerSingleton<IUserRepository>(
  "CustomerRepository",
  UserRepository
);
childContainer.registerSingleton<ICreateUserService>(
  "CreateUserService",
  CreateUserService
);
childContainer.registerSingleton<UserController>(
  "CustomerController",
  UserController
);
//O register diz que o serviço dado deve ser utilizado quando a interface
//está sendo injetada e a nova instancia será criada para cada singleton
childContainer.register<ControllerAdapterType>("ControllerAdapter", {
  useValue: controllerAdapterMiddleware,
});
childContainer.registerSingleton<DocsController>(
  "DocsController",
  DocsController
);
childContainer.registerSingleton<DocsService>("DocsService", DocsService);

export { childContainer as container };
