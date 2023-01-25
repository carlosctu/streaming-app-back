import { IRoutesController } from "@routes/Controller";
import { Request, Response } from "express";

export type User = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ControllerAdapterType = (
  controller: IRoutesController
) => (req: Request, res: Response) => Response;

export type ApplicationError = {
  name: string;
  message: string;
};