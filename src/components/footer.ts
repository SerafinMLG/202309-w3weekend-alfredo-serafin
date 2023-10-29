import { Component } from './component';
import '../scss/footer.scss';
export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` 
    <footer>
      <address>ISDI - Coders</address>
    </footer>
    `;
  }
}
