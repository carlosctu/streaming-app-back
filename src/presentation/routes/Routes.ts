import { tokens } from "@/di/tokens";
import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { UserRouter } from "./user/UserRouter";

@injectable()
export class MainRouter {
  private router: Router = Router();
  constructor(
    @inject(tokens.UserRouter)
    private userRouter: UserRouter
  ) {}
  public setup() {
    this.router = this.router.use("/user", this.userRouter.setup());
    return this.router;
  }
}
