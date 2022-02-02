import ajax from './ajax.js';

const selectInch = document.querySelector('.select_inch');

selectInch.addEventListener('change', e => {
    const data = {
        "inch_id": e.target.value
    }
    const url = e.target.dataset.url;
    const tap = document.querySelector(e.target.dataset.tap);
    ajax.get(url, data, res => {
        let html = '';
        for(let prop in res) {
            html += `
            <li>
                <span class="spec">${res[prop]['fields']['spec']}</span> 
                <span class="quantity">${res[prop]['fields']['quantity']}</span>
            </li>
            
            `
        }
        html = `<ul>${html}</ul>`;
        tap.innerHTML = html
    })
})