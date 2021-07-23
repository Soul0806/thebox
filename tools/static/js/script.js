
console.log('hello');

const termAdd = document.querySelector('.term__add');
const termInput = document.querySelector('.term__input');
const termClose = document.querySelector('.close');


termAdd.addEventListener('click', function (element) {
  termInput.classList.add('active');
});

termClose.addEventListener('click', function (element) {
  termInput.classList.remove('active');
})