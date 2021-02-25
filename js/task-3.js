'use strict'

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const ulRef = document.querySelector('#gallery');

  ulRef.classList.add('list--task3');

  function createElem (obj){
      const liRef = document.createElement('li');
      liRef.classList.add('listitem--task3')

      const imgRef = document.createElement('img');
      imgRef.classList.add('img--task3')

      imgRef.setAttribute('src', obj.url);
      imgRef.setAttribute('alt', obj.alt);

      liRef.append(imgRef);

      return liRef;
  }

  const imgList = images.map(elem => createElem(elem));

  ulRef.append(...imgList);