'use strict'

import lib from './base.js'
import j from './jquery.lib.js'
import ajax from './ajax.js'
import './nav.js'


const html = document.querySelector('html');
const search = document.querySelector('.knowledge__search')
const main = document.querySelector('.knowledge__main');
const form = document.querySelector('.knowledge__form');

const searchAdd = search.querySelector('.add');
const searchInput = search.querySelector('.search');

const mainQs = main.querySelectorAll('.q');
const overlay = main.querySelector('.overlay');
const mainAs = main.querySelectorAll('.awrap');

const closeform = form.querySelector('.close-icon');
const tag = form.querySelector('.tag');
const pad = form.querySelector('.pad');
const mask = form.querySelector('.mask');
const term = form.querySelectorAll('.term');
const formTip = form.querySelector('.tip');

function toggle(obj) {
  Object.entries(obj).forEach(
    ([key, value]) => {
      if (value.length > 1) {
        value.forEach(elem => {
          elem.classList.toggle(key);
        })
      } else {
        value.classList.toggle(key);
      }
    }
  );
}

function remove(obj) {
  Object.entries(obj).forEach(
    ([key, value]) => {
      if (value.length > 1) {
        value.forEach(elem => {
          elem.classList.remove(key);
        })
      } else {
        value.classList.remove(key);
      }
    }
  );
}

function cleanInput(obj) {
  return;
}

function manipulate(obj) {
  return;
}

function cleanForm() {
  const toggleElem = { hidden: searchAdd, visible: [form, overlay] };
  const removeElem = { selected: term, show: formTip };
  toggle(toggleElem);
  remove(removeElem);
}

function hasClass(elem, className) {
  return elem.classList.contains(className);
}

searchAdd.onclick = e => {
  e.target.classList.toggle('hidden')
  form.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

closeform.onclick = cleanForm;

tag.onfocus = () => {
  pad.classList.toggle('visible');
  mask.classList.toggle('visible');
}

mask.onclick = e => {
  pad.classList.toggle('visible');
  e.target.classList.toggle('visible');
}

let arrTerms = []
pad.onclick = e => {
  if (hasClass(e.target, 'term')) {
    const item = e.target.dataset.item
    if (arrTerms.includes(item)) {
      arrTerms.splice(arrTerms.indexOf(item), 1)
      e.target.classList.toggle('selected')
    }
    else {
      arrTerms.push(item)
      e.target.classList.toggle('selected')
    }

    let strTerms = arrTerms.join()
    tag.value = strTerms
  }
}
main.onclick = e => {
  if (hasClass(e.target, 'q')) {
    remove({ show: mainAs });
    e.target.nextElementSibling.classList.add('show');
  }
}

form.onclick = e => {
  if (hasClass(e.target, 'insertbtn')) {
    let data = j.getTargetPair(e, csrf);
    if (!data) {
      // formTip.classList.toggle('show')
      toggle({ show: formTip })
    } else {
      ajax.post(url_insert_question, data, res => {
        navTip.animate([
          { top: '0px' },
          { top: '30px' },
          { top: '-20px' }
        ], 2000);
      });
      cleanForm();
    }
  }
}

searchInput.oninput = e => {
  const val = e.target.value;
  if (val.length > 0) {
    ajax.get(url_select_question, { search: val }, res => {
      $('.knowledge__main').html(res)
    })
  }
}

// j.click('#js_category_add', e => {
//   let term = j.getTargetVal(e);
//   if (!lib.isEmpty(term)) {
//     let data = { 'term': term }
//     ajax.get(url_insert_category, data, (res) => {
//       var target = [...document.querySelectorAll('.term__list')].pop()
//       let clone = target.cloneNode();
//       clone.innerHTML = res;
//       target.parentNode.insertBefore(clone, target.nextSibling);
//     });
//   }
// })

// j.click('.term__list, .term__form', e => {
//   let term = $(e.target).data('term');
//   let data = { 'term': term }
//   ajax.get(url_term_page, data, res => {
//     if (res == 'default') {
//       $('.default').siblings().remove()
//       $('.default').show();
//       return
//     }
//     $('.default').hide()
//     $('.default').siblings().remove()
//     $('.layout').append(res)
//   })
// })

// j.click('.insertbtn', e => {
//   let data = j.getTargetPair(e, csrf);

// })







