import compose from 'koa-compose';
import send from 'koa-send';
import mount from 'koa-mount';
import serve from 'koa-static';

export function staticFavicon() {
  return async (ctx, next) => {
    if (ctx.path === '/favicon.ico') {
      await send(ctx, 'dist/web/favicon.ico', {
        maxage: 604800, // 60 seconds * 60 minutes * 24 hours * 7 days = 1 week = 604800 seconds
      });

      return;
    }
    await next();
  };
}

export function staticAssets() {
  return mount('/assets', serve('dist/web', {
    maxage: 0, // TODO: change this to a reasonable value when development has calmed down a bit
  }));
}

export const statics = () => compose([
  staticFavicon(),
  staticAssets(),
]);
