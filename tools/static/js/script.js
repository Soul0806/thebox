'use strict'
// import lib from "./base";

// const termAdd = document.querySelector('.term__add');
// const termVal = document.querySelector('.term__val');

// const termInput = document.querySelector('.term__input');
// const termClose = document.querySelector('.close');

// const devMode = document.querySelector('.dev__mode');
// const devCircle = document.querySelector('.js-dev-circle');
// const layoutTag = document.querySelector('.layout__tag');

// const mask = document.querySelector('.mask');
// const outerwrap = document.querySelector('.outerwrap');
const html = document.querySelector('html')
const search = document.querySelector('.knowledge__search')
const main = document.querySelector('.knowledge__main');
const form = document.querySelector('.knowledge__form');

const searchAdd  = search.querySelector('.add');
const mainQs = main.querySelectorAll('.q');
const overlay = main.querySelector('.overlay');
const closeform = form.querySelector('.close');
const tag = form.querySelector('.tag');
const pad = form.querySelector('.pad');
// const item = form.querySelector('.item');

searchAdd.addEventListener('click', e => { 
  e.target.classList.add('open')
  form.classList.add('show');
  overlay.classList.add('show');
})

closeform.addEventListener('click', e => {
  searchAdd.classList.remove('open');
  form.classList.remove('show');
  overlay.classList.remove('show');
})

tag.addEventListener('focus', e => {
  pad.classList.add('show');
})

let arr_terms = []
pad.addEventListener('click', e => {
  if(!e.target.matches('.term')) return;
  let item = e.target.dataset.item
  if(arr_terms.includes(item)) {
    arr_terms.splice(arr_terms.indexOf(item), 1)
    e.target.classList.remove('selected')
  }    
  else {
    arr_terms.push(item)
    e.target.classList.add('selected')
  }

  let str_terms = arr_terms.join()
  tag.value = str_terms
  // console.log(str_terms)
})

overlay.addEventListener('click', e => {
})



// const pageQ = document.querySelector('.p age__q');
// const pageSearch = document.querySelector('.js_page_search');
// const termCheck = document.querySelectorAll('.js_term_ckbox');


// termAdd.addEventListener('click', (element) => { 
//   termInput.classList.add('active');
//   termVal.focus();
// });

// termClose.addEventListener('click', (element) => {
//   termInput.classList.remove('active');
// })

// devCircle.addEventListener('click', (element) => {
//   devMode.classList.contains('active')
//     ? devMode.classList.remove('active')
//     : devMode.classList.add('active');
// })

// layoutTag.addEventListener('focus', (element) => {
//   mask.classList.add('show');
//   outerwrap.classList.add('show');
// })

// mask.addEventListener('click', (element) => {
//   mask.classList.remove('show');
//   outerwrap.classList.remove('show');
// })

// let arr = [];
// let str = '';
// termCheck.forEach(item => {
//   item.addEventListener('click', e => {
//     let val = e.target.value;
//     arr.includes(val) ? arr.splice(arr.indexOf(val), 1) : arr.push(val)
//     layoutTag.value = arr.join(',');
//   })
// })

main.addEventListener('click', (e) => {
  if(!e.target.matches('.q')) return;
  const mainAs = main.querySelectorAll('.awrap');
  mainAs.forEach(e => e.classList.remove('show'))
  e.target.nextElementSibling.classList.add('show');
})


// layout.addEventListener('click', (e) => {
//   if(!e.target.matches('.edit')) return;
//   let val = e.target.previousElementSibling.innerHTML;
//   let height = e.target.previousElementSibling.offsetHeight;
//   let width = e.target.previousElementSibling.offsetWidth ;
//   e.target.previousElementSibling.remove();
//   let textarea = document.createElement('textarea');
//   textarea.value = val;
//   // textarea.setAttribute('style',`width:${width}px`);
//   textarea.setAttribute('style',`height:${height}px;width:${width}px`);
//   e.target.parentElement.prepend(textarea)
// })
