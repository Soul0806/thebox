import ajax from './ajax.js';
// const selectInch = document.querySelector('.select_inch');
const body = document.querySelector('body')
const mask = document.querySelector('.mask')

const inch = document.querySelectorAll('.ul_inch li');
const tire = document.querySelector('.tire');

const form = document.querySelector('.modify')
const close = document.querySelector('.modifyform__close');
const spec = document.querySelector('.modifyform__spec');
const submit = document.querySelector('.modifyform__submit');
const quantity = document.querySelector('.modifyform__quantity');

const modifyBefore = document.querySelector('.modifyform__before');


inch.forEach(li => {
    li.addEventListener('click', e => {
        const data = {
            inch_id: e.target.dataset.id
        }
        const url = e.target.dataset.url;
        const tap = document.querySelector(e.target.dataset.tap);
        ajax.get(url, data, res => {
            // let html = '';
            // for(let prop in res) {
            //     html += `
            //     <li>
            //         <span class="spec">${res[prop]['fields']['spec']}</span> 
            //         <span class="quantity">${res[prop]['fields']['quantity']}</span>
            //     </li>
            //     `
            // }
            // html = `<ul>${html}</ul>`;
            tap.innerHTML = res
        })
    })
})

tire.addEventListener('click', e => {
    if (e.target.classList.contains('spec')) {
        let sibings = e.target.nextElementSibling;
        form.style.display = 'block';
        spec.textContent = e.target.textContent;
        modifyBefore.textContent = sibings.textContent;
    }
})
close.addEventListener('click', e => {
    form.style.display = 'none'
    // mask.style.opacity = 1;
})

submit.addEventListener('click', e => {
    e.preventDefault();
    const tire_quan = document.querySelector('.tire__spec .quantity');
    const url = e.target.dataset.url;
    const data = {
        spec: spec.textContent,
        quantity: quantity.value
    }
    ajax.get(url, data, res => {
        const result = JSON.parse(res);
        form.style.display = 'none'
        tire_quan.textContent = result[1];
        console.log(result);
    })
})