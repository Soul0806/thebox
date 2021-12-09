import './drap.js';
import './test.js';

import './dom.js';
import ajax from './ajax.js';

const aside = document.querySelector('aside');

const sort = aside.querySelector('[data-sort-item]');
const sortLi = aside.querySelectorAll('li');
// const sortItem = aside.querySelectorAll('.sort__item');

const section = document.querySelector('section');

/* Add element attrs */
sortLi[0].dataset.active = true;

function focusEffect(li) {
  const activeSort = sort.querySelector('[data-active]');
  delete activeSort.dataset.active;
  li.dataset.active = true;
}

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
  sortLi.forEach((li, index) => {
    li.onclick = function () {
      focusEffect(li);
      const item = this.dataset.item;
      const pk = this.id;
      history.pushState({ item: item }, '', '')
      showItem(pk);
    };
  });

  section.onclick = e => {
    const textarea = section.querySelector('textarea');
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
