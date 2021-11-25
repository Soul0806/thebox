import './drap.js';
import './test.js';

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

function showItem(pk) {
  fetch(`show/${pk}`)
    .then(response => response.text())
    .then(text => { section.innerHTML = text });
}

document.addEventListener("DOMContentLoaded", () => {
  sortItem.forEach((elmnt, index) => {
    elmnt.onclick = function () {
      const item = this.dataset.item;
      const pk = this.id;
      history.pushState({ item: item }, '', '')
      showItem(pk);
    };
  });

  section.onclick = e => {
    const textarea = main.querySelector('textarea');
    console.log(textarea);
    const pk = e.target.dataset.pk;
    if (e.target.classList.contains('confirm')) {
      const data = {
        'pk': pk,
        'html': textarea.value,
        'csrfmiddlewaretoken': csrf
      }
      ajax.post(url_insert_content, data, result => {
        showItem(data.pk)
      });
    }
  }
});
