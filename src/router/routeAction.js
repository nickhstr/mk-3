import { register as registerPage } from '../contexts/page';
import { getPage } from './getPage';

export async function routeAction(context) {
  console.log('Router resolve context:', context);
  const {
    route,
    store,
  } = context;

  const { page } = route.params;
  const props = {
    page,
  };

  await registerPage(store, props);
  const app = await getPage(store);

  return app;
}
