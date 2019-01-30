import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Layout } from './layouts/Layout';
import { modules } from './modules';
import { createStore, regionsSelector } from './redux';

async function getRegisteredModules(store, regions) {
  const mappedModules = {};
  const regionKeys = Object.keys(regions);

  await Promise.all(
    regionKeys.map(async (key) => {
      const registeredModulesForRegion = await Promise.all(
        regions[key].map(async (mod) => {
          const { register } = await modules[mod]();

          return register(store);
        }),
      );

      mappedModules[key] = registeredModulesForRegion;
    }),
  );

  return mappedModules;
}

async function main() {
  // eslint-disable-next-line no-underscore-dangle
  const store = await createStore(window.__initial_state__);
  const regions = regionsSelector(store.getState());
  const registeredModules = await getRegisteredModules(store, regions);
  const renderTarget = document.getElementById('app-root');

  render(
    <Provider store={store}>
      <Layout regions={registeredModules} />
    </Provider>,
    renderTarget,
  );
}

main();
