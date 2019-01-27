import { LitElement, html } from 'lit-element';
import './layouts/my-layout';
import './modules/my-intro';

class MyApp extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return 'my-app';
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
}

function main() {
  customElements.define(MyApp.is, MyApp);
}

main();
