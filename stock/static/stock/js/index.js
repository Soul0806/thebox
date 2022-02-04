import ajax from './ajax.js';
// const selectInch = document.querySelector('.select_inch');
const body = document.querySelector('body')
const mask =  document.querySelector('.mask')

const inch = document.querySelectorAll('.ul_inch li');
const tire = document.querySelector('.tire');

const form = document.querySelector('.modify')
const close =  document.querySelector('.modifyform__close');
const spec =  document.querySelector('.modifyform__spec');
const modifyBefore =  document.querySelector('.modify__form_before');

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
    if(e.target.classList.contains('spec')) {
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
