import { LitElement, html } from 'lit-element';
import '../my-header';
import '../../components/my-card';
import styles from './styles.css';

class MyIntro extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return 'my-intro';
  }

  render() {
    const imageUrl = 'https://i.kym-cdn.com/entries/icons/original/000/006/428/637738.jpg';
    return html`
      <style>${styles.toString()}</style>
      <div class="container">
        <my-header></my-header>
      </div>
      <div class="container">
        <my-card width="100%" height="100%" backgroundImage="${imageUrl}"> I'm a card!</my-card>
      </div>
    `;
  }
}

customElements.define(MyIntro.is, MyIntro);
