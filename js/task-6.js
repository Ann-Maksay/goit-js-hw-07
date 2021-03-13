'use strict'

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('focus', handleInputFocus);


function handleInputBlur(event) {
    const validValue = event.target.getAttribute("data-length");
    if (event.target.value.length !== validValue) {
        event.target.classList.add('invalid');

    } else {
        event.target.classList.add('valid');
    }
}

function handleInputFocus(event) {
    if (event.target.classList.contains('valid')) {
        event.target.classList.remove('valid');
    }
    if (event.target.classList.contains('invalid')) {
        event.target.classList.remove('invalid');
    }
}


//ВЕРСИЯ БЕЗ СЛУШАТЕЛЯ НА ФОКУС
// function handleInputBlur(event) {
//     const validValue = event.target.getAttribute("data-length");
//     if (event.target.value.length !== validValue) {
//         if (event.target.classList.contains('valid')) {
//             event.target.classList.replace('valid', 'invalid');
//         } else {
//             event.target.classList.add('invalid');
//         }

//     } else {
//         if (event.target.classList.contains('invalid')) {
//             event.target.classList.replace('invalid', 'valid');
//         } else {
//             event.target.classList.add('valid');
//         }
//     }
// }