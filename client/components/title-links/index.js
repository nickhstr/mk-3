import { LitElement, html } from 'lit-element';
import styles from './styles.css';

export class TitleLinks extends LitElement {
  constructor() {
    super();
    this.links = [];
  }

  static get properties() {
    return {
      links: { type: Array },
    };
  }

  static get is() {
    return 'title-links';
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <ul class="links">
        ${this.links.map(link => html`
          <li class="link">
            <a href="${link.href}">${link.name}</a>
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define(TitleLinks.is, TitleLinks);
