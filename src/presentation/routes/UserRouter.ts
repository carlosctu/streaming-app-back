import "reflect-metadata";
import { ListUsersController } from "./../../application/controllers/user/ListUsersController";
import { CreateUserController } from "./../../application/controllers/user/CreateUserController";
import { tokens } from "@/di/tokens";
import { Router } from "express";
import { injectable, inject } from "tsyringe";
import { ControllerAdapterType, IRouteController } from "./types/IRouteController";
import { UpdateUserController } from "@/application/controllers/user/UpdateUserController";
import { DeleteUserController } from "@/application/controllers/user/DeleteUserController";

@injectable()
export class UserRouter {
  private router = Router();
  constructor(
    @inject(tokens.ControllerAdapter)
    private controllerAdapter: ControllerAdapterType,
    @inject(tokens.CreateUserController)
    private createuserController: IRouteController,
    @inject(tokens.ListUsersController)
    private listsUserController: IRouteController,
    @inject(tokens.UpdateUserController)
    private updateUserController: IRouteController,
    @inject(tokens.DeleteUserController)
    private deleteUserController: IRouteController
  ) {}
  public setup(): Router {
    this.router.get("/", this.controllerAdapter(this.listsUserController));
    this.router.post("/", this.controllerAdapter(this.createuserController));
    this.router.put("/", this.controllerAdapter(this.updateUserController));
    this.router.delete("/", this.controllerAdapter(this.deleteUserController));
    return this.router;
  }
}
