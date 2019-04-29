import { hydrate } from 'react-dom';
import { ModuleInterface } from './moduleInterface';
import { getPage } from './router/getPage';
import { createStore } from './redux';

async function main() {
  const store = await createStore(window.__initial_state__);
  const moduleInterface = new ModuleInterface({ store });
  const app = await getPage(moduleInterface);
  const renderTarget = document.getElementById('app-root');

  hydrate(
    app,
    renderTarget,
  );
}

main();
