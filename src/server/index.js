import os from 'os';
import http from 'http';
import cluster from 'cluster';
import Koa from 'koa';
import { env } from '../env';
import { createLogger } from '../logger';

const HOST = env.HOST || '0.0.0.0';
const PORT = env.PORT || '3000';
const ADDRESS = `http://${HOST}:${PORT}`;
const NODE_ENV = env.NODE_ENV || 'production';
const WORKER_COUNT = Math.ceil(os.cpus().length);
const APP_THREADS = env.APP_THREADS || WORKER_COUNT;
const logger = createLogger('server');

/**
 *
 * @param {Koa} app - Koa app instance
 */
function startServer(app) {
  const server = http.createServer(app.callback());

  server.on('close', () => {
    logger.info('Server shut down');
  });

  process.on('SIGTERM', () => {
    server.close();
  });

  process.on('SIGINT', () => {
    server.close();
  });

  process.on('uncaughtException', (err) => {
    logger.fatal(err);
  });

  return server.listen(PORT, HOST, () => {
    logger.info(`Server listening on ${ADDRESS}`);
  });
}

/**
 *
 * @param {KoaMiddleware} middleware
 */
export function createServer(middleware) {
  const app = new Koa();

  if (middleware) {
    app.use(middleware);
  }

  if (NODE_ENV !== 'production') {
    startServer(app);

    return app;
  }

  if (cluster.isMaster) {
    logger.debug(`Master ${process.pid} started`);

    for (let i = 0; i < APP_THREADS; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      logger.debug({
        workerPid: worker.process.pid,
        code,
        signal,
      }, 'Worker disconnected');

      if (!worker.exitedAfterDisconnect) {
        cluster.fork();
      }
    });

    process.on('SIGTERM', () => {
      cluster.disconnect();
    });

    process.on('SIGINT', () => {
      cluster.disconnect();
    });

    process.on('uncaughtException', (err) => {
      logger.fatal(err);
    });
  } else {
    logger.debug(`Worker ${process.pid} started`);

    startServer(app);
  }

  return app;
}
