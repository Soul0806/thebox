import ajax from './ajax.js'

const fileInput = document.querySelector('.fileUploader');
const content = document.querySelector('#fileContent')

let readFile = function (e) {
    const reader = new FileReader();
    reader.onload = e => {
        content.innerHTML = reader.result;
        const data = {
            'csv': reader.result
        }
        ajax.get(url_test, data, res => {
            console.log(res)
        })
    }
    reader.readAsBinaryString(fileInput.files[0]);
}

fileInput.addEventListener('change', readFile)
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


