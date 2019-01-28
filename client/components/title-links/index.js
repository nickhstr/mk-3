import { LitElement, html } from 'lit-element';
import anime from 'animejs/lib/anime.es';
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

  firstUpdated() {
    const linksNodes = this.shadowRoot.getElementById('title-links').children;
    anime({
      targets: linksNodes,
      translateY: 20,
      opacity: 1,
      delay: anime.stagger(100),
    });
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <ul class="links" id="title-links">
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
