import "reflect-metadata";
import { tokens } from "@/di/tokens";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { container } from "./di";
import { MainRouter } from "./presentation/routes/Routes";
import { IDatabaseClient } from "./infrastructure/db/db";

const app = express();
const router = container.resolve<MainRouter>(tokens.MainRouter);
const mongoClient = container.resolve<IDatabaseClient>(tokens.DatabaseClient);

dotenv.config();

app.use(express.json()).use(router.setup()).use(cors());

mongoClient
  .connect()
  .then(() => {
    console.log("Connection to MongoDB stablished");
  })
  .catch((error) => {
    console.log("Connection failed");
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Magic happens on port ${process.env.PORT}`);
});

export default app;
