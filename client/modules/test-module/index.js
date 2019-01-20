import { LitElement, html } from 'lit-element';
import '../../components/my-hello';

class TestModule extends LitElement {
  constructor() {
    super();
    this.msgToPass = 'First message';
  }

  static get properties() {
    return {
      msgToPass: { type: String },
    };
  }

  firstUpdated() {
    setInterval(() => {
      this.msgToPass = `Message with a number: ${Math.random() * 100}`;
    }, 1000);
  }

  render() {
    return html`
      <my-hello msg="${this.msgToPass}"></my-hello>
    `;
  }
}

customElements.define('test-module', TestModule);
