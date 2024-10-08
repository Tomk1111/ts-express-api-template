import dotenv, { DotenvConfigOutput } from "dotenv";
import { IConfig } from "../types/config";

process.env.NODE_ENV = process.env.NODE_ENV || "development";


const envFound: DotenvConfigOutput = dotenv.config();
if (envFound.error && process.env.NODE_ENV != "production") {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}



const config: IConfig = {
    /**
     * Environment
     */
    env: process.env.NODE_ENV,

    /**
     * Your favorite port
     */

    /**
     * Used by express
     */
    port: parseInt(process.env.PORT as string, 10) || 3000,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },

    /**
     * API configs
     */
    api: {
        prefix: "/api/v1",
    },
};

export default config;