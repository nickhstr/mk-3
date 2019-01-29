import { LitElement, html } from 'lit-element';
import anime from 'animejs/lib/anime.es';
import styles from './styles.css';

export class MyTitle extends LitElement {
  constructor() {
    super();
    this.primary = 'Nick Hester';
    this.secondary = 'Software Engineer';
    this.animate = false;
  }

  static get is() {
    return 'my-title';
  }

  static get properties() {
    return {
      primary: { type: String },
      secondary: { type: String },
      animate: { type: Boolean },
    };
  }

  get animationStyles() {
    return `
      .greeting {
        opacity: 0;
      }
    `;
  }

  get styles() {
    return this.animate ? html`
      <style>
        ${styles.toString()}
        ${this.animationStyles}
      </style>
    ` : html`
      <style>
        ${styles.toString()}
      </style>
    `;
  }

  firstUpdated() {
    const nodes = this.shadowRoot.querySelectorAll('.greeting');

    anime({
      targets: nodes,
      opacity: 1,
      delay: anime.stagger(500),
    });
  }

  render() {
    return html`
      ${this.styles}
      <p class="greeting subtext primary-greeting">Hi, my name is</p>
      <h1 class="greeting primary">${this.primary}</h1>
      <p class="greeting subtext secondary-greeting">and I'm a</p>
      <h2 class="greeting secondary">${this.secondary}</h2>
    `;
  }
}

customElements.define(MyTitle.is, MyTitle);
