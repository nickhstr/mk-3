import { LitElement, html } from 'lit-element';
import anime from 'animejs/lib/anime.es';
import '../../components/my-title';
import '../../components/title-links';
import '../../components/my-card';
import styles from './styles.css';
import profileImage from './split-nick.svg';

class MyIntro extends LitElement {
  constructor() {
    super();
    this.profileImgLoad = this.profileImgLoad.bind(this);
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

  profileImgLoad() {
    const profileContainer = this.shadowRoot.getElementById('profile-container');

    anime({
      targets: profileContainer,
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutElastic(1, 1)',
    });
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <div class="container title">
        <header class="header">
          <my-title primary="Nick Hester" secondary="Software Engineer"></my-title>
        </header>
        <title-links .links="${this.links}" animate></title-links>
      </div>
      <div class="container profile" id="profile-container">
        <my-card width="100%" height="100%" backgroundImage="${profileImage}" .imgLoadCallback="${this.profileImgLoad}"></my-card>
      </div>
    `;
  }
}

customElements.define(MyIntro.is, MyIntro);
