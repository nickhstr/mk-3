import { createStore } from '../../redux';

export function redux() {
  return async (ctx, next) => {
    const store = await createStore();

    ctx.store = store;
    await next();
  };
}
