import app from './app.js';
import { config } from './core/config/index.js';
import { logger } from './core/logger/index.js';

app.listen(config.port, () => {
  logger.info(`🚀 TaskForge is running on port ${config.port}`);
});