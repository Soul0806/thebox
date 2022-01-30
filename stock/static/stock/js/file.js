import ajax from './ajax.js'
 const reader = new FileReader();

const fileInput = document.querySelector('.fileUploader');
const content = document.querySelector('#fileContent')

const inserTire = document.querySelector('.js-insert-tire');

let readFile = e => {
    reader.onload = e => {
        const data = { 'csv': reader.result }    
        const url = fileInput.dataset.url;
        ajax.get(url, data, res => {
            content.innerHTML = res;
        })
    }
    reader.readAsBinaryString(fileInput.files[0]);
}

fileInput.addEventListener('change', readFile)

inserTire.addEventListener('click', e => {
  const data = { 'csv': reader.result }
  const url = e.target.dataset.url;
  ajax.get(url, data, res => {
     
  })
})
// file.onchange = e => {
//     let reader = new FileReader();
//     file = e.target.files[0];
//     fileReader.onload = function (e) {
//         console.log(e.target.result);
//     }
// }


// file.onchange = e => {
//     fileReader.readAsDataURL(e.target.files[0])
// }

// fileReader.addEventListener("load", e => {

// })


