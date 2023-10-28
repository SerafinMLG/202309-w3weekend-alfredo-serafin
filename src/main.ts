import { List } from './components/list';
import './scss/card.scss'

function main() {
console.log('Loaded main');
const appElement = document.querySelector<HTMLDivElement>('.container');
if (appElement === null) return;
const components = 
  new List('.container');




console.log(components);
}

main();
