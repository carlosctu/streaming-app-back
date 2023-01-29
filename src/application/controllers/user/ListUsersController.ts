import { IUserService } from "./../../../infrastructure/user/types/IUserService";
import { tokens } from "./../../../di/tokens";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject, injectable } from "tsyringe";
import { IBaseController } from "./../IBaseController";

@injectable()
export class ListUsersController implements IBaseController {
  constructor(
    @inject(tokens.UserService)
    private userService: IUserService
  ) {
    this.userService = userService;
  }
  async handle(req: Request, res: Response): Promise<Response> {
    const usersList = await this.userService.listUsers();
    return res.status(httpStatus.OK).send({
      status: "success",
      data: usersList,
    });
  }
}
