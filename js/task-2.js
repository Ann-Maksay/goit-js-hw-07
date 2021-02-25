'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ulRef = document.querySelector('#ingredients');

  function createList(arry){
      return arry.map(elem => {
          const liRef = document.createElement('li');
          liRef.textContent = elem;
          return liRef;
      })
  }

  ulRef.append(...createList(ingredients));