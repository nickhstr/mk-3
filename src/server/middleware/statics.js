import compose from 'koa-compose';
import send from 'koa-send';
import mount from 'koa-mount';
import serve from 'koa-static';

const MAXAGE = {
  WEEK: 604800000, // 1000 * 60 seconds * 60 minutes * 24 hours * 7 days = 1 week = 604800 seconds
  MONTH: 2628001152, // WEEK * 4.34524
};

export function staticFavicon() {
  return async (ctx, next) => {
    if (ctx.path === '/favicon.ico') {
      await send(ctx, 'dist/web/favicon.ico', {
        maxage: MAXAGE.MONTH,
      });

      return;
    }
    await next();
  };
}

export function staticAssets() {
  return mount('/assets', serve('dist/web', {
    maxage: MAXAGE.WEEK,
  }));
}

export const statics = () => compose([
  staticFavicon(),
  staticAssets(),
]);
