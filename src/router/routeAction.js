import { register as registerPage } from '../contexts/page';
import { pageConfigMetaSelector } from '../contexts/page/selectors';
import { getPage } from './getPage';

// TODO: refactor to use saga
export async function routeAction(context) {
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
  const { title, description } = pageConfigMetaSelector(store.getState());

  return {
    app,
    title,
    description,
  };
}
