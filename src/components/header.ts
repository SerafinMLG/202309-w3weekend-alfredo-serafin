import { Component } from './component';
import '../scss/header.scss';



export class Header extends Component {

  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }


  createTemplate() {
    return ` 
    <header class="header">
      <img src="./public/img/pokemon-logo.svg" alt="logo pokemon" width="300" height="150">
    </header>
    `;
  }
}
