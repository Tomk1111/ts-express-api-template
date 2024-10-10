
import { Express, Request, Response } from "express";
import config from "../config";
import errorHandler from "../api/middlewares/errorHandler";
import routes from "../api";



const expressLoader = (app: Express): void => {
    app.get("/status", (_req: Request, res: Response) => {
        res.status(200).json({message: "Server is running"})
    });

    // Trust proxy to get original IP address in production
    app.enable("trust proxy");

    // Load API routes with the configured prefix
    app.use(config.api.prefix, routes());

    // Handle 404 - Not Found
    app.use((_req: Request, res: Response) => {
        res.status(404).json({error: "Not Found"})
    });
	
    // Global error handler
    app.use(errorHandler);
}

export default expressLoader;
