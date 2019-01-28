import { LitElement, html } from 'lit-element';
import '../../components/my-title';
import '../../components/title-links';
import '../../components/my-card';
import styles from './styles.css';
import profileImage from './split-nick.png';

class MyIntro extends LitElement {
  constructor() {
    super();
    this.links = [
      {
        href: '/projects',
        name: 'Projects',
      },
      {
        href: 'https://github.com/nickhstr',
        name: 'GitHub',
      },
      {
        href: '/resume',
        name: 'Resume',
      },
    ];
  }

  static get is() {
    return 'my-intro';
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <div class="container title">
        <header class="header">
          <my-title primary="Nick Hester" secondary="Software Engineer"></my-title>
        </header>
        <title-links .links="${this.links}"></title-links>
      </div>
      <div class="container profile">
        <my-card width="100%" height="100%" backgroundImage="${profileImage}"></my-card>
      </div>
    `;
  }
}

customElements.define(MyIntro.is, MyIntro);
