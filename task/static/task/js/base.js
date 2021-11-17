import './drap.js';
import './test.js';

import j from './ajax.js';
import './dom.js';
import ajax from './ajax.js';

const main = document.querySelector('main');

const sortLi = main.querySelectorAll('li');
const sortItem = main.querySelectorAll('.sort__item');
const section = main.querySelector('section');



window.onpopstate = e => {
  const item = e?.state?.item;
  if (item) {
    showItem(item);
  }
}

// if (e.state.item) {
//   console.log(123);
// } else {
//   console.log(4444);
// }




function showItem(item) {
  fetch(`show/${item}`)
    .then(response => response.text())
    .then(text => { section.innerHTML = text });
}

document.addEventListener("DOMContentLoaded", () => {
  sortItem.forEach((elmnt, index) => {
    elmnt.onclick = function () {
      console.log(this);
      const item = this.dataset.item;
      history.pushState({ item: item }, '', '')
      showItem(item);
    };
  });

  section.onclick = e => {
    const content = main.querySelector('#content');
    if (e.target.classList.contains('confirm')) {
      const data = {
        'html': content.innerHTML,
        'csrfmiddlewaretoken': csrf
      }
      ajax.post(url_insert_content, data, result => {
        console.log(result);
      });
      // console.log(content.innerHTML);
    }
  }
});
