import dotenv, { DotenvConfigOutput } from "dotenv";
import { IConfig } from "../types/config";

// Ensure the NODE_ENV is set to 'development' by default if not provided
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load environment variables from .env file
const envFound: DotenvConfigOutput = dotenv.config();

// Throw an error if the .env file is missing in non-production environments
if (envFound.error && process.env.NODE_ENV !== "production") {
    throw new Error("⚠️  .env file missing. Please create a .env file based on .env.example ⚠️");
}

// Parse and validate the port number
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

if (isNaN(port)) {
    throw new Error("⚠️  Invalid port number in environment variables ⚠️");
}

// Config object with type enforcement
const config: IConfig = {
    env: process.env.NODE_ENV,
    port: port,  // Ensure that port is valid and parsed
    logs: {
        level: process.env.LOG_LEVEL || "info",  // Default to "info" if LOG_LEVEL is missing
    },
    api: {
        prefix: process.env.API_PREFIX || "/api/v1",  // Make API prefix configurable via environment variable
    },
};

// Export the config object
export default config;

