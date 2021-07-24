'use strict'
const termAdd = document.querySelector('.term__add');
const termInput = document.querySelector('.term__input');
const termClose = document.querySelector('.close');

const devMode = document.querySelector('.dev__mode');
const devCircle = document.querySelector('.js-dev-circle');

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


