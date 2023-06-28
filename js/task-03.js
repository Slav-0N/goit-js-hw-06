const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galeryElem = document.querySelector('.gallery');
console.log(galeryElem);

const newContainer = document.createElement("div");
console.log(newContainer);


const makeListItem = images.map(({url, alt}) => {
  return `<li class="item"><img src="${url}" alt="${alt}"></li>`;
  

});

console.log(makeListItem);

const arrToStringElem = `${makeListItem.join('')}`


console.log(arrToStringElem);

galeryElem.insertAdjacentHTML("afterbegin", arrToStringElem);



