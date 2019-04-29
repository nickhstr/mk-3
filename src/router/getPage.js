import React from 'react';
import { Provider } from 'react-redux';
import { modules } from '../modules';
import { Layout } from '../layouts/Layout';
import { pageConfigRegionsSelector } from '../contexts/page/selectors';

/**
 * Return JSX for complete page.
 *
 * @param  {ModuleInterface} moduleInterface
 *
 * @return {JSX.Element}
 */
export async function getPage(moduleInterface) {
  const registeredModules = await getRegisteredModules(moduleInterface);

  return (
    <Provider store={moduleInterface.getStore()}>
      <Layout regions={registeredModules} />
    </Provider>
  );
}

export async function getRegisteredModules(moduleInterface) {
  const mappedModules = {};
  const regions = moduleInterface.select(pageConfigRegionsSelector);
  const regionKeys = Object.keys(regions);

  await Promise.all(
    regionKeys.map(async (key) => {
      const registeredModulesForRegion = await Promise.all(
        regions[key].map(async (mod) => {
          const { name, props } = mod;
          const { register } = await modules[name]();
          const module = await register(moduleInterface, { props });

          return module;
        }),
      );

      mappedModules[key] = registeredModulesForRegion;
    }),
  );

  return mappedModules;
}
