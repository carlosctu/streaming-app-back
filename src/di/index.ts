import { DeleteUserController } from "./../application/controllers/user/DeleteUserController";
import { UpdateUserController } from "./../application/controllers/user/UpdateUserController";
import { ListUsersController } from "./../application/controllers/user/ListUsersController";
import { CreateUserController } from "./../application/controllers/user/CreateUserController";
import { UserRouter } from "./../presentation/routes/UserRouter";
import { tokens } from "./tokens";
import { container, delay } from "tsyringe";
import { MainRouter } from "@/presentation/routes/Routes";
import MongoDBClient, { IDatabaseClient } from "@/infrastructure/db/db";
import { ControllerAdapterType } from "@/presentation/routes/types/IRouteController";
import controllerAdapterMiddleware from "@/application/middlewares/ControllerAdapterMiddleware";
import { IUserService } from "@/infrastructure/user/types/IUserService";
import { UserService } from "@/domain/services/user/UserService";
import { IUserRepository } from "../infrastructure/user/types/IUserRepository";
import { UserRepository } from "../infrastructure/user/repository/UserRepository";

const childContainer = container.createChildContainer();
// o registerSingleton espera dois parametros, o nome do container (token) e
// nome da classe que queremos instanciar.
// Ele é responsável por instancias as nossas classes no projeto, e não
// poderá ser instanciada em nenhum outro lugar.
childContainer.registerSingleton<MainRouter>(tokens.MainRouter, MainRouter);
childContainer.register<ControllerAdapterType>(tokens.ControllerAdapter, {
  useValue: controllerAdapterMiddleware,
});
childContainer.registerSingleton<UserRouter>(tokens.UserRouter, UserRouter);
childContainer.registerSingleton<CreateUserController>(
  tokens.CreateUserController,
  CreateUserController
);
childContainer.registerSingleton<ListUsersController>(
  tokens.ListUsersController,
  ListUsersController
);
childContainer.registerSingleton<UpdateUserController>(
  tokens.UpdateUserController,
  UpdateUserController
);
childContainer.registerSingleton<DeleteUserController>(
  tokens.DeleteUserController,
  DeleteUserController
);
childContainer.registerSingleton<IUserService>(tokens.UserService, UserService);
childContainer.registerSingleton<IUserRepository>(
  tokens.UserRepository,
  delay(() => UserRepository)
);
childContainer.registerSingleton<IDatabaseClient>(
  tokens.DatabaseClient,
  MongoDBClient
);

export { childContainer as container };
