import { LitElement, html } from 'lit-element';
import styles from './styles.css';

class MyCard extends LitElement {
  constructor() {
    super();
    this.width = '300px';
    this.height = '200px';
    this.backgroundImage = '';
    this.imgLoadCallback = () => null;
  }

  static get is() {
    return 'my-card';
  }

  static get properties() {
    return {
      width: { type: String },
      height: { type: String },
      backgroundImage: { type: String },
      imgLoadCallback: { type: Function },
    };
  }

  get cardStyles() {
    return `
      .card {
        width: ${this.width};
        height: ${this.height};
      }
    `;
  }

  get imageCardStyles() {
    return `
      .card {
        background-image: url("${this.backgroundImage}");
      }
    `;
  }

  get styles() {
    return this.backgroundImage ? html`
      <style>
        ${styles.toString()}
        ${this.cardStyles}
        ${this.imageCardStyles}
      </style>
    ` : html`
      <style>
        ${styles.toString()}
        ${this.cardStyles}
      </style>
    `;
  }

  render() {
    return html`
      ${this.styles}
      ${this.backgroundImage ? html`
      <img src="${this.backgroundImage}" @load="${this.imgLoadCallback}" style="display:none;">
      ` : null}
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(MyCard.is, MyCard);
