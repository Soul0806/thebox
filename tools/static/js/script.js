'use strict'

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

circle.onclick = () => {
  navPad.classList.toggle('visible');
}

searchAdd.onclick = e => {
  e.target.classList.toggle('hidden')
  form.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

let test = 0;
closeform.addEventListener('click', cleanForm);

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

export {circle}

// document.querySelector('.tips').animate([
//   { transform: 'translateY(30px)' },
// ], {
//   duration: 3000,
// });





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
