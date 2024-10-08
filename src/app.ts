import loaders from "./loaders";
import express, { Express } from "express";
import Logger from "./loaders/logger";
import config from "./config";


async function startServer(): Promise<void> {
    const app: Express = express()

    await loaders(app);
    Logger.info("Express loaded");


    app.listen(config.port, () => {
        Logger.info(`
      ################################################
      Server listening on port: ${config.port}
      ################################################
    `);
    }).on("error", (err: Error) => {
        Logger.error(err);
        process.exit(1);
    })
}

startServer()