import { Request, Response } from "express";

export type RouteBase = (req: Request, res: Response) => Promise<Response>;

export interface IRouteController {
  handle: RouteBase;
}

export type ControllerAdapterType = (
  controller: IRouteController
) => (req: Request, res: Response) => Response | Promise<Response>;
