'use strict'
// import lib from "./base";

const termAdd = document.querySelector('.term__add');
const termInput = document.querySelector('.term__input');
const termClose = document.querySelector('.close');

const devMode = document.querySelector('.dev__mode');
const devCircle = document.querySelector('.js-dev-circle');
const layoutTag = document.querySelector('.layout__tag');

const mask = document.querySelector('.mask');
const outerwrap = document.querySelector('.outerwrap');
const layout = document.querySelector('.layout');

const termCheck = document.querySelectorAll('.js_term_ckbox');
// const pageSearch = document.querySelector('.js_page_search');


termAdd.addEventListener('click', (element) => {
  termInput.classList.add('active');
});

termClose.addEventListener('click', (element) => {
  termInput.classList.remove('active');
})

devCircle.addEventListener('click', (element) => {
  devMode.classList.contains('active')
    ? devMode.classList.remove('active')
    : devMode.classList.add('active');
})

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


