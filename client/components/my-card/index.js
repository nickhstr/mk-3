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

  render() {
    return html`
      <style>${styles.toString()}</style>
      <img src="${this.backgroundImage || ''}" @load="${this.imgLoadCallback}" style="display:none;" />
      <div class="card" style="width:${this.width};height:${this.height};${this.backgroundImage ? (`background-image:url("${this.backgroundImage}");`) : ''}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(MyCard.is, MyCard);
