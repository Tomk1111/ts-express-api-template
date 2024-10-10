import { NextFunction, Request, Response } from "express";
import sampleService, { SampleData } from "../services/SampleService";

export async function sampleFunction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // Call the sampleService and handle the result
        const result: SampleData[] = await sampleService(); // Type should match the return type of sampleService

        // Send the response
        res.status(200).json(result);
    } catch (error) {
        // Log and forward the error for centralized error handling
        console.error("Error in sampleFunction:", error);
        next(error);
    }
}

