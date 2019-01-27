import { LitElement, html } from 'lit-element';
import '../../components/my-title';
import '../../components/my-card';
import styles from './styles.css';
import profileImage from './split-nick.png';

class MyIntro extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return 'my-intro';
  }

  render() {
    return html`
      <style>${styles.toString()}</style>
      <div class="container title">
        <header>
          <my-title primary="Nick Hester" secondary="Software Engineer"></my-title>
        </header>
      </div>
      <div class="container profile">
        <my-card width="100%" height="100%" backgroundImage="${profileImage}"></my-card>
      </div>
    `;
  }
}

customElements.define(MyIntro.is, MyIntro);
