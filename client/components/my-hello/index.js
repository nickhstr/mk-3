import { LitElement, html } from 'lit-element';
import styles from './styles.css';

class Hello extends LitElement {
  constructor() {
    super();
    this.msg = 'Hello from LitElement';
  }

  static get properties() {
    return {
      msg: { type: String },
    };
  }

  connectedCallback() {
    // Have to call super's connectedCallback, as it is used as a part of LitElement's
    // implementation.
    super.connectedCallback();
    console.log('my-hello connected');
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <h1 class="title">Hello Web Components!</h1>
      <p>${this.msg}</p>
    `;
  }
}

customElements.define('my-hello', Hello);
