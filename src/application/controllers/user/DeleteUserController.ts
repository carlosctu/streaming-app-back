import { IUserService } from "./../../../infrastructure/user/types/IUserService";
import { tokens } from "./../../../di/tokens";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import httpStatus from "http-status";
import { ParsedQs } from "qs";
import { inject, injectable } from "tsyringe";
import { IBaseController } from "./../IBaseController";

@injectable()
export class DeleteUserController implements IBaseController {
  constructor(
    @inject(tokens.UserService)
    private userService: IUserService
  ) {
    this.userService = userService;
  }
  async handle(req: Request, res: Response): Promise<Response> {
    return res.sendStatus(httpStatus.OK);
  }
}
