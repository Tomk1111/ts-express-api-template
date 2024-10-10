import loaders from "./loaders";
import express, { Express } from "express";
import Logger from "./loaders/logger";
import config from "./config";

async function startServer(): Promise<void> {
    const app: Express = express();

    try {
        // Load all necessary modules (middleware, routes, etc.)
        await loaders(app);
        Logger.info("Express loaded successfully");

        const server = app.listen(config.port, () => {
            Logger.info(`
            ################################################
            🟢  Server is listening on port: ${config.port}
            🌍  Environment: ${config.env}
            🕒  Startup Time: ${new Date().toLocaleTimeString()}
            ################################################
            `);
        });

        // Graceful shutdown on process termination signals
        const shutdown = () => {
            Logger.info("Shutting down server...");
            server.close(() => {
                Logger.info("Server closed");
                process.exit(0);
            });

            // Forcefully close the server if it doesn't shut down in time
            setTimeout(() => {
                Logger.error("Forcing server shutdown after timeout");
                process.exit(1);
            }, 10000); // 10 seconds timeout for shutdown
        };

        process.on("SIGTERM", shutdown); // Graceful shutdown on kill signal (e.g., docker stop)
        process.on("SIGINT", shutdown);  // Graceful shutdown on Ctrl+C

    } catch (err) {
        Logger.error(`❌ Error starting server: ${(err as Error).message}`);
        process.exit(1);
    }
}

// Start the server
startServer();

