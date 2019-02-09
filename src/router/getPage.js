import React from 'react';
import { Provider } from 'react-redux';
import { modules } from '../modules';
import { Layout } from '../layouts/Layout';
import { pageConfigRegionsSelector } from '../contexts/page/selectors';

export async function getPage(store) {
  const registeredModules = await getRegisteredModules(store);

  return (
    <Provider store={store}>
      <Layout regions={registeredModules} />
    </Provider>
  );
}

export async function getRegisteredModules(store) {
  const mappedModules = {};
  const regions = store.select(pageConfigRegionsSelector);
  const regionKeys = Object.keys(regions);

  await Promise.all(
    regionKeys.map(async (key) => {
      const registeredModulesForRegion = await Promise.all(
        regions[key].map(async (mod) => {
          const { register } = await modules[mod]();
          const module = await register(store);

          return module;
        }),
      );

      mappedModules[key] = registeredModulesForRegion;
    }),
  );

  return mappedModules;
}
