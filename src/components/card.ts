
import { Component } from './component'
import { Poke } from '../data/pokemon';

export class Card extends Component {
  poke: Poke;
  constructor(
    selector: string,
    poke: Poke,
  ) {
    super(selector);
    this.poke = { ...poke };
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return `
    <li class="task-card">
      <p><span></span> ${this.poke.name} </p>
    </li>
      `;
  }
}
