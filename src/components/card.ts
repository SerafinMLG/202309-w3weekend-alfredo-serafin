
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
    const id = this.poke.url.split('/').filter(Boolean).pop();
    return `
    <li class="task-card"><p>${id}</p>
    <a href="https://pokeapi.co/api/v2/pokemon/${this.poke.name}">
    <div class = "image"><img class="gif" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" alt="imagen del pokemon">
    </div>
      <p class="pokname">${this.poke.name}</p>
      </a>
    </li>
      `;
  }
}
