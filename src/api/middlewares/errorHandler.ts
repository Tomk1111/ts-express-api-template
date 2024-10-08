import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../../config";
import Logger from "../../loaders/logger";
import { IError as CustomError } from "../../types/error";


const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    Logger.error("Error: %o, Request: %o", err, req);

    const errorName: string = err.name || "InternalServerError";
    const errorStatus: number = err.status || 500;
    const errorMessage: string = err.message || "Something went wrong";

    const errorData: CustomError = {
        success: false,
        name: errorName,
        status: errorStatus,
        message: errorMessage,
    }

    if (config.env === "development") {
        errorData.stack = err.stack;
    }

    res.status(errorStatus).json(errorData);
    next();

}

export default errorHandler