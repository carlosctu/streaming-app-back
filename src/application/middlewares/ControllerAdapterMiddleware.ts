import { IRouteController } from "@/presentation/routes/types/IRouteController";
import { Request, Response } from "express";

export default function controllerAdapterMiddleware(
  controller: IRouteController
) {
  return (req: Request, res: Response) => controller.handle(req, res);
}
