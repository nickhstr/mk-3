import { hydrate } from 'react-dom';
import { getPage } from './router/getPage';
import { createStore } from './redux';

async function main() {
  // eslint-disable-next-line no-underscore-dangle
  const store = await createStore(window.__initial_state__);
  const app = await getPage(store);
  const renderTarget = document.getElementById('app-root');

  hydrate(
    app,
    renderTarget,
  );
}

main();
