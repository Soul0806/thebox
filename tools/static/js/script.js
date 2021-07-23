
console.log('hello');

const svgAdd = document.querySelector('.svg_add');
const cross = document.querySelector('.cross');

cross.addEventListener('click', function (element) {
  svgAdd.classList.add('active');
  console.log(123)
})