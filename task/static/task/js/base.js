import './drap.js';
import './test.js';

import j from './ajax.js';
import './dom.js';

const main = document.querySelector('main');

const sortLi = main.querySelectorAll('li');
const sortItem = main.querySelectorAll('.sort__item');
const section = main.querySelector('section');

window.onpopstate = e => {
  const item = e.state.item;
  showItem(item);
}

function showItem(item) {
  fetch(`show/${item}`)
    .then(response => response.text())
    .then(text => { section.innerHTML = text });
}

document.addEventListener("DOMContentLoaded", () => {
  sortItem.forEach((elmnt, index) => {
    elmnt.onclick = e => {
      const item = e.target.dataset.item;
      // history.pushState({ item: item }, '', `item-${item}`)
      showItem(item);
    };
  });
});
