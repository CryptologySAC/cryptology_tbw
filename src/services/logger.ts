import pino from "pino";

export const logger = pino({
    name: "Cryptology TBW",
    safe: true,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: true,
            ignore: "pid,hostname"
        }
    },
});
