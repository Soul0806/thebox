const nav = document.querySelector('nav');

const circle = nav.querySelector('.circle');
const navPad = nav.querySelector('.pad');
const navTip = nav.querySelector('.tip');

circle.onclick = () => {
  navPad.classList.toggle('visible');
}