import { ModuleInterface } from '../../moduleInterface';
import { createStore } from '../../redux';

export function redux() {
  return async (ctx, next) => {
    const store = await createStore();

    ctx.moduleInterface = new ModuleInterface({ store });
    await next();
  };
}
