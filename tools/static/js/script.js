'use strict'
// import lib from "./base";

const termAdd = document.querySelector('.term__add');
const termVal = document.querySelector('.term__val');

const termInput = document.querySelector('.term__input');
const termClose = document.querySelector('.close');

const devMode = document.querySelector('.dev__mode');
const devCircle = document.querySelector('.js-dev-circle');
const layoutTag = document.querySelector('.layout__tag');

const mask = document.querySelector('.mask');
const outerwrap = document.querySelector('.outerwrap');
const layout = document.querySelector('.layout');

// const pageQ = document.querySelector('.page__q');
// const pageSearch = document.querySelector('.js_page_search');
const termCheck = document.querySelectorAll('.js_term_ckbox');


termAdd.addEventListener('click', (element) => { 
  termInput.classList.add('active');
  termVal.focus();
});

termClose.addEventListener('click', (element) => {
  termInput.classList.remove('active');
})

// devCircle.addEventListener('click', (element) => {
//   devMode.classList.contains('active')
//     ? devMode.classList.remove('active')
//     : devMode.classList.add('active');
// })

layoutTag.addEventListener('focus', (element) => {
  mask.classList.add('show');
  outerwrap.classList.add('show');
})

mask.addEventListener('click', (element) => {
  mask.classList.remove('show');
  outerwrap.classList.remove('show');
})

let arr = [];
let str = '';
termCheck.forEach(item => {
  item.addEventListener('click', e => {
    let val = e.target.value;
    arr.includes(val) ? arr.splice(arr.indexOf(val), 1) : arr.push(val)
    layoutTag.value = arr.join(',');
  })
})


layout.addEventListener('click', (e) => {
  if(!e.target.matches('.page__q')) return;
  // const pageA = document.querySelectorAll('.page__a');
  // pageA.forEach(e => e.classList.remove('show'))
  // console.log(e.target.nextElementSibling.querySelector('.page__a'))
  e.target.nextElementSibling.classList.add('show');
})

layout.addEventListener('click', (e) => {
  if(!e.target.matches('.edit')) return;
  let val = e.target.previousElementSibling.innerHTML;
  let height = e.target.previousElementSibling.offsetHeight;
  let width = e.target.previousElementSibling.offsetWidth ;
  e.target.previousElementSibling.remove();
  let textarea = document.createElement('textarea');
  textarea.value = val;
  textarea.setAttribute('style',`height:${height}px;width:${width}px`);
  e.target.parentElement.prepend(textarea)
})
