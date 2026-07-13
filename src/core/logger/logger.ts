import pino from 'pino';
import { config } from "../config/env.js";

const options: pino.LoggerOptions = {
  level: config.logLevel,
};

if (config.nodeEnv === 'development') {
  options.transport = {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:ss.l',
    },
  };
}

export const logger = pino(options);