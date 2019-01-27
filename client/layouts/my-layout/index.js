import { LitElement, html } from 'lit-element';

export class MyLayout extends LitElement {
  constructor() {
    super();
    this.header = [];
    this.main = [];
    this.footer = [];
  }

  static get is() {
    return 'my-layout';
  }

  static get properties() {
    return {
      header: { type: Array },
      main: { type: Array },
      footer: { type: Array },
    };
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(MyLayout.is, MyLayout);
