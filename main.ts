import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";
import { useRoutes } from "./routes";
import { debug } from "./utils/cli";

const initApp = () => {
  // onBeforeMounted
  prepare();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // onMounted
  return app;
};

const runOnPort = (app: express.Application, port: number) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const prepare = () => {
  debug("Preparing...", 1);
  fs.mkdirSync("data", { recursive: true });
};

/**
 * main intro
 */
const app = initApp();
useRoutes(app);
runOnPort(app, 3333);
