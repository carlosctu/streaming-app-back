import { Router } from "express";
import { UserController } from "../../application/controllers/UserController";
import { userSchema as userSchema } from "../../application/middlewares/schemas/UserSchema";
import { validateBody } from "../../application/middlewares/ValidatorMiddleware";
import { injectable, inject } from "tsyringe";
import { ControllerAdapterType } from "../../protocols";

@injectable()
export class UserRouter {
  private router = Router();
  constructor(
    @inject("UserController")
    private userController: UserController,
    @inject("RouterAdapter")
    private controllerAdapter: ControllerAdapterType
  ) {}
  public setup(): Router {
    this.router.post(
      "/",
      validateBody(userSchema),
      this.controllerAdapter(this.userController)
    );

    return this.router;
  }
}
