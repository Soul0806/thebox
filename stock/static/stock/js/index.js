import ajax from './ajax.js';

const selectInch = document.querySelector('.select_inch');

selectInch.addEventListener('change', e => {
    const data = {
        "inch_id": e.target.value
    }
    const url = e.target.dataset.url;
    const tap = document.querySelector(e.target.dataset.tap);
    ajax.get(url, data, res => {
        // let html = '';
        // res.forEach((k,v) => {
        //     html += `<div>${k}</div>`;
        // });
        tap.innerHTML = res
    })
})