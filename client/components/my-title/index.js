import { LitElement, html } from 'lit-element';
import styles from './styles.css';

export class MyTitle extends LitElement {
  constructor() {
    super();
    this.primary = 'Nick Hester';
    this.secondary = 'Software Engineer';
  }

  static get is() {
    return 'my-title';
  }

  static get properties() {
    return {
      primary: { type: String },
      secondary: { type: String },
    };
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <p class="greeting primary-greeting">Hi, my name is</p>
      <h1 class="primary">${this.primary}</h1>
      <p class="greeting secondary-greeting">and I'm a</p>
      <h2 class="secondary">${this.secondary}</h2>
    `;
  }
}

customElements.define(MyTitle.is, MyTitle);
