'use strict'

const categoriesRef = document.querySelectorAll('.item');

function countСategories(arry){
    return `В списке ${arry.length} категории.`;
}

function getInfo(arry){
    arry.forEach(element => {
        console.log(`Категория: ${element.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
    });
}

console.log(countСategories(categoriesRef));

getInfo(categoriesRef);