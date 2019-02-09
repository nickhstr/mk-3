import compose from 'koa-compose';
import { createLoggerMiddleware } from './logger';
import { assets } from './assets';
import { statics } from './statics';
import { redux } from './redux';
import { router } from './router';
import { render } from './render';
import { env } from '../../env';

export const middleware = () => compose([
  createLoggerMiddleware({
    appName: env.APP_NAME || 'mk-3',
  }),
  redux(),
  assets(),
  statics(),
  router(),
  render(),
]);
