import { NextFunction, Request, Response } from "express";
import sampleService from "../services/SampleService";

export async function sampleFunction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        
        // Call the searchService and handle the result
        const result: Promise<any> = await sampleService();
        
        // Use the res object from the function parameters to send the response
        res.status(200).json(result);
    } catch (error) {
        // Handle errors
        next(error);
    }
}
