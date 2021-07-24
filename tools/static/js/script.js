'use strict'
const termAdd = document.querySelector('.term__add');
const termInput = document.querySelector('.term__input');
const termClose = document.querySelector('.close');

const devMode = document.querySelector('.dev__mode');
const devCircle = document.querySelector('.js-dev-circle');
const layoutTag = document.querySelector('.layout__tag');

const mask = document.querySelector('.mask');
const outerwrap = document.querySelector('.outerwrap');

termAdd.addEventListener('click',  (element) => {
  termInput.classList.add('active');
});

termClose.addEventListener('click', (element) => {
  termInput.classList.remove('active');
})

devCircle.addEventListener('click', (element) => {
  devMode.classList.contains('active') 
    ?  devMode.classList.remove('active')
    :  devMode.classList.add('active');
})

layoutTag.addEventListener('focus', (element) => {
  mask.classList.add('show');
  outerwrap.classList.add('show');
})

mask.addEventListener('click', (element) => {
  mask.classList.remove('show');
  outerwrap.classList.remove('show');
})



