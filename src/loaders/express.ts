
import { Express, Request, Response } from "express";
import config from "../config";
import errorHandler from "../api/middlewares/errorHandler";
import routes from "../api";



const expressLoader = (app: Express): void => {
    app.get("/status", (_req: Request, res: Response) => {
        res.status(200).send("Server is running")
    });

    // Trust proxy to get original IP address in production
    app.enable("trust proxy");

    // API routes
    app.use(config.api.prefix, routes());

    app.use(errorHandler);
}

export default expressLoader;