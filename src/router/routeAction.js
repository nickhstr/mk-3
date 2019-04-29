import { register as registerPage } from '../contexts/page';
import { pageConfigMetaSelector } from '../contexts/page/selectors';
import { getPage } from './getPage';

// TODO: refactor to use saga
export async function routeAction(context) {
  const {
    route,
    moduleInterface,
  } = context;

  const { page } = route.params;
  const props = {
    page,
  };

  await registerPage(moduleInterface, { props });
  const app = await getPage(moduleInterface);
  const { title, description } = pageConfigMetaSelector(moduleInterface.getState());

  return {
    app,
    title,
    description,
  };
}
