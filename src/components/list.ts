import { Component } from './component';
import { ApiRepo } from '../model/api.repo';
import { Poke } from '../components/data/pokemon';
import { Card } from './card';


export class List extends Component {
  pokes: Poke[];
  repo: ApiRepo;
  constructor(selector: string) {
    
    super(selector);
    this.repo = new ApiRepo();
    this.pokes = [];
    this.loadPokes();
    console.log('Fist load');
    console.log(this.pokes);
    this.render();
  }

  async loadPokes() {
    try {
      this.pokes = await this.repo.getPoke();
      console.log('Load from API');
      console.log(this.pokes);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

    render() {
      this.template = this.createTemplate();
      super.render();
      return this.pokes.results.map(
        (item: Poke) =>
          new Card(
            'ul',
            item)
        );
    }

    createTemplate() {
      return `
      <ul></ul>    
    `;
  }
}
