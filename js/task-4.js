'use strict'

let counterValue = 0;

const numRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);

function increment(){
    counterValue++;
    numRef.textContent = counterValue;
}

function decrement(){
    counterValue--;
    numRef.textContent = counterValue;
}





