import { LitElement, html } from 'lit-element';
import '../../components/my-title';

export class MyHeader extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return 'my-header';
  }

  render() {
    return html`
      <header>
        <my-title primary="Nick Hester" secondary="Software Engineer"></my-title>
      </header>
    `;
  }
}

customElements.define(MyHeader.is, MyHeader);
