import { Response, Request } from "express";
import { User } from "@/protocols";
import httpStatus from "http-status";
import { ICreateUserService } from "@/domain/services/UserService";
import { injectable, inject } from "tsyringe";
import { IRoutesController } from "@routes/Controller";

@injectable()
export class UserController implements IRoutesController {
  constructor(
    @inject("CreateUser") private createUserService: ICreateUserService
  ) {
    this.createUserService = createUserService;
  }

  handle(req: Request, res: Response): Response {
    const userInfo = req.body as User;
    delete userInfo.confirmPassword;
    const newUser = this.createUserService.execute(userInfo);
    return res
      .status(httpStatus.CREATED)
      .send({ status: "success", user: newUser });
  }
}
