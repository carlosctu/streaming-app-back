import { Router } from "express";
import { container } from "../../di/index";
import { UserRouter } from "./UserRoute";
import { DocsRouter } from "../docs/DocsRouter";

const router = Router();
const customerRouter = container.resolve(UserRouter);
const docsRouter = container.resolve(DocsRouter);
router.use("/user", customerRouter.setup());
router.use("/docs", docsRouter.setup());
export default router;
