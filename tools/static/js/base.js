// function log(output) {
//     console.log(output)
// }

// function isEmpty(str) {
//     return !str.trim().length;
// }

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function trm(item, index) {
//     this[index] = item.trim();
// }
'use strict'

const lib = {
    log: output => {
        console.log(output)
    },
    isEmpty: str => {
        return !str.trim().length;
    },
    capitalizeFirstLetter: string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
export default lib;