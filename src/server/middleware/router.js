import UniversalRouter from 'universal-router';
import { ROUTES, routeAction } from '../../router';

export function router() {
  const Router = newRouter(ROUTES);

  return async (ctx, next) => {
    const {
      app,
      title,
      description,
    } = await Router.resolve({
      pathname: ctx.path,
      store: ctx.store,
      query: ctx.query,
    });

    ctx.app = app;
    ctx.title = title;
    ctx.description = description;

    await next();
  };
}

/**
 * @param {Object[]} routes
 * @returns {UniversalRouter}
 */
function newRouter(routes) {
  const universalRoutes = [];
  const pages = Object.keys(routes);

  pages.forEach((page) => {
    universalRoutes.push({
      path: routes[page],
      params: { page },
      action: routeAction,
    });
  });

  const Router = new UniversalRouter(universalRoutes);

  return Router;
}
