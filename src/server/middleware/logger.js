import koaPinoLogger from 'koa-pino-logger';
import { createLogger } from '../../logger';

export function createLoggerMiddleware({
  appName,
}) {
  const logger = createLogger('koa', { appName });

  return koaPinoLogger({ logger });
}
