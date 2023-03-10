import { Request, Response } from "express";

export interface IBaseController {
  handle: (req: Request, res: Response) => Promise<Response>;
}
