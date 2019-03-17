import pino from 'pino';
import { env } from '../env';
import {
  DEFAULT_LOG_LEVEL,
  LOG_LEVELS,
} from './constants';

export * from './constants';

const LOG_LEVEL = env.LOG_LEVEL || 'info';
const prettyPrint = env.NODE_ENV !== 'production';
const logger = pino({
  level: LOG_LEVEL,
  prettyPrint: prettyPrint ? { colorize: true } : undefined,
});

/**
 * Creates child logger with namespace and context
 * @param {String} namespace - Identifies namespace context to use
 * @param {Object} context   - Object that provides additional context for messaging
 *
 * @return {pino} Child logger
 */
export function createLogger(namespace, context = {}) {
  return logger.child({
    namespace,
    ...context,
  });
}

export function setLevel(level = DEFAULT_LOG_LEVEL) {
  if (logger && LOG_LEVELS.includes(level)) {
    logger.level = level;
  }
}
