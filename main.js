import { quotes } from './arrays.js';
import { getRandomIntInclusive } from './functions.js';

const h3 = document.querySelector('h3');
const button = document.querySelector('button');

button.focus();

button.addEventListener('click', () => {
  let number = getRandomIntInclusive(1, quotes.length - 1);
  h3.innerHTML = quotes[number];
});

button.addEventListener('keypress', e => {
  if (e.which === 13) {
    button.click();
  }
});
