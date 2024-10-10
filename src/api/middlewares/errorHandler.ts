import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../../config";
import Logger from "../../loaders/logger";
import { IError as CustomError } from "../../types/error";

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction): void => {
    // Log the error and request for better traceability
    Logger.error("Error occurred on %s %s: %o", req.method, req.originalUrl, err);

    // Extract error information, providing defaults if values are missing
    const errorData: CustomError = {
        success: false,
        name: err.name || "InternalServerError",
        status: err.status || 500,
        message: err.message || "Something went wrong",
    };

    // Include stack trace in development mode
    if (config.env === "development") {
        errorData.stack = err.stack;
    }

    // Send a JSON response to the client with the error details
    res.status(errorData.status).json(errorData);
    next();
};

export default errorHandler;

