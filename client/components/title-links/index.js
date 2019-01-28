import { LitElement, html } from 'lit-element';
import anime from 'animejs/lib/anime.es';
import styles from './styles.css';

export class TitleLinks extends LitElement {
  constructor() {
    super();
    this.links = [];
    this.animate = false;
  }

  static get properties() {
    return {
      links: { type: Array },
      animate: { type: Boolean },
    };
  }

  static get is() {
    return 'title-links';
  }

  get animationStyles() {
    return `
        .link {
          opacity: 0;
        }
    `;
  }

  get styles() {
    return html`
      <style>
        ${styles.toString()}
        ${this.animate ? this.animationStyles : null}
      </style>
    `;
  }

  firstUpdated() {
    if (this.animate) {
      const linksNodes = this.shadowRoot.getElementById('title-links').children;
      anime({
        targets: linksNodes,
        translateY: [0, 20],
        opacity: 1,
        delay: anime.stagger(100),
      });
    }
  }

  render() {
    return html`
      ${this.styles}
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
