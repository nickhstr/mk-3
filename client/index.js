import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Layout } from './layouts/Layout';
import { register } from './modules/Intro';
import { createStore } from './redux';

async function main() {
  const store = await createStore();
  const renderTarget = document.getElementById('app-root');
  const MainModule = register(store);

  render(
    <Provider store={store}>
      <Layout main={<MainModule />} />
    </Provider>,
    renderTarget,
  );
}

main();
