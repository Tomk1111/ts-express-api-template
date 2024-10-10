import config from "../config";
import winston from "winston";

const transports: winston.transport[] = [];
if (config.env !== "development") {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
		winston.format.simple()
            )
        }),
    )
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat()
            ),
        })
    );
}

const Logger: winston.Logger = winston.createLogger({
    level: config.logs!.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports
});

Logger.exceptions.handle(
    	new winston.transports.Console({ format: winston.format.simple() })
);

Logger.rejections.handle(
	new winston.transports.Console({ format: winston.format.simple() })
);


export default Logger;
