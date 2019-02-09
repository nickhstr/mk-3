/* global WEBPACK_ASSETS __non_webpack_require__ */

export function assets() {
  const webpackAssets = __non_webpack_require__(WEBPACK_ASSETS);

  return async (ctx, next) => {
    ctx.assets = webpackAssets;

    await next();
  };
}
