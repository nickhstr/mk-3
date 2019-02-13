export function errors() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        error: err.message,
      };
    }
  };
}
