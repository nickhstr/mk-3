import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import './layouts/my-layout';
import { modules } from './modules';
import { createStore } from './redux';

function getMyApp(store) {
  return class MyApp extends connect(store)(LitElement) {
    constructor() {
      super();
    }

    static get is() {
      return 'my-app';
    }

    stateChanged(state) {
      console.log('State changed:', state);
    }

    render() {
      return html`
        <style>
          :host {
            width: 100%;
          }
        </style>
        <my-layout>
          <my-intro></my-intro>
        </my-layout>
      `;
    }
  };
}

async function main() {
  const store = await createStore();
  const myApp = getMyApp(store);

  const modKeys = Object.keys(modules);

  try {
    await Promise.all(
      modKeys.map(async (key) => {
        const register = await modules[key]();

        register(store);
      }),
    );
  } catch (err) {
    console.error('Failed to register modules', err);
  }

  customElements.define(myApp.is, myApp);
}

main();
