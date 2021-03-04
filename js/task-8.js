'use strict'

const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls > input');
const containerRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', onCreateBtn);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const boxesList = [];

    for (let i = 0; i < amount; i++){
        const divRef = document.createElement('div');

        divRef.style.width = `${30 + 10 * i}px`;
        divRef.style.height = `${30 + 10 * i}px`;
        divRef.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        boxesList.push(divRef);
    }

    containerRef.append(...boxesList);
}

function onCreateBtn() {
    if (inputRef.nodeValue !== 0) {
        createBoxes(inputRef.value);
    }
}

function destroyBoxes() {
    while (containerRef.firstChild) {
        containerRef.firstChild.remove();
    }
}