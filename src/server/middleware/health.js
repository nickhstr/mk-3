import packageJson from '../../../package.json';

export function health({
  path = `/${packageJson.name}/health`,
  appName = packageJson.name,
} = {}) {
  const startTime = Date.now();

  return async (ctx, next) => {
    if (ctx.path === path) {
      ctx.body = {
        name: appName,
        version: packageJson.version,
        uptime: `${Date.now() - startTime}ms`,
      };

      return;
    }

    await next();
  };
}
