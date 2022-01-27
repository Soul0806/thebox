
fileInput = document.querySelector('.fileUploader');
content = document.querySelector('#fileContent')

readFile = function (e) {
    let reader = new FileReader();
    reader.onload = e => {
        content.innerHTML = reader.result;
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


