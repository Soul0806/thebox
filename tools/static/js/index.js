'use strict'

import lib from './base.js'
import j from './jquery.lib.js'
import ajax from './ajax.js'


const html = document.querySelector('html');
const nav = document.querySelector('nav');
const search = document.querySelector('.knowledge__search')
const main = document.querySelector('.knowledge__main');
const form = document.querySelector('.knowledge__form');

const searchAdd  = search.querySelector('.add');
const searchInput = search.querySelector('.search');

const circle = nav.querySelector('.circle');
const navPad = nav.querySelector('.pad');
const navTip = nav.querySelector('.tip');

const mainQs = main.querySelectorAll('.q');
const overlay = main.querySelector('.overlay');

const closeform = form.querySelector('.close-icon');
const tag = form.querySelector('.tag');
const pad = form.querySelector('.pad');
const mask = form.querySelector('.mask');
const term = form.querySelectorAll('.term');
const formTip = form.querySelector('.tip');

function toggle(obj) {
  Object.entries(obj).forEach(
    ([key, value]) => {
      if(value.length> 1) {
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
      if(value.length> 1) {
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
  toggle(obj.toggle);
  remove(obj.remove)
}

function cleanForm() {
  const toggle = {hidden: searchAdd, visible: [form, overlay]};
  const remove = {selected: term, show: formTip};
  manipulate({ toggle, remove });
}

circle.onclick = () => {
  navPad.classList.toggle('visible');
}

searchAdd.onclick = e => {
  e.target.classList.toggle('hidden')
  form.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

closeform.onclick = cleanForm

tag.addEventListener('focus', e => {
  pad.classList.toggle('visible');
  mask.classList.toggle('visible');
})

let arr_terms = []
pad.addEventListener('click', e => {
  if(!e.target.matches('.term')) return;
  let item = e.target.dataset.item
  if(arr_terms.includes(item)) {
    arr_terms.splice(arr_terms.indexOf(item), 1)
    e.target.classList.toggle('selected')
  }    
  else {
    arr_terms.push(item)
    e.target.classList.toggle('selected')
  }

  let str_terms = arr_terms.join()
  tag.value = str_terms
  // console.log(str_terms)
})

mask.addEventListener('click', e => {
  pad.classList.toggle('visible');
  e.target.classList.toggle('visible');
})

main.addEventListener('click', (e) => {
  if(!e.target.matches('.q')) return;
  const mainAs = main.querySelectorAll('.awrap');
  mainAs.forEach(e => e.classList.remove('show'))
  e.target.nextElementSibling.classList.add('show');
})


form.addEventListener('click', e => {
  if(!e.target.matches('.insertbtn')) return;
  let data = j.getTargetPair(e, csrf);
  if(!data) {
    formTip.classList.toggle('show')
  } else {
    ajax.post(url_insert_question, data, res => {
      navTip.animate([
        {top: '0px'},
        {top: '30px'},
        {top: '-20px'}
      ], 2000);  
    });
    cleanForm();    
  }
})
  
searchInput.addEventListener('input', (e) => {
  // if(!e.target.matches('.js_page_search')) return;
  if(e.target.value.length == 0) return;
  let search = { "search": e.target.value}
  ajax.get(url_select_question, search, res => {
    $('.knowledge__main').html(res)
  })
})


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







