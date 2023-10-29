import { List } from './components/list';
import { Header } from '../src/components/header';
import './scss/card.scss';
import { Footer } from '../src/components/footer';

function main() {
console.log('Loaded main');
const appElement = document.querySelector<HTMLDivElement>('.container');
if (appElement === null) return;
const components = 
  new Header('.container');
  // eslint-disable-next-line no-new
  new List('.header');
  // eslint-disable-next-line no-new
  new Footer('.task-card');

console.log(components);
}

main();
