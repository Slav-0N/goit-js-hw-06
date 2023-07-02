const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const unoderedListElement = document.querySelector('ul');


const addingListElements = ingredients.map(ingredient => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add('item');
  listItemElem.textContent = ingredient;
  return listItemElem;
});

console.log(addingListElements);
console.log(...addingListElements);
unoderedListElement.append(...addingListElements);




// const addingListElements = ingredients.forEach(ingredient => {
//   const listItemElem = document.createElement("li");
//   listItemElem.classList.add('item');
//   listItemElem.textContent = ingredient;

//   newContainerElem.append(listItemElem);
  
// console.log(unoderedListElement);
// });

// const textedElements = newContainerElem.innerHTML;
// console.log(newContainerElem.innerHTML);

// unoderedListElement.insertAdjacentHTML('afterbegin', textedElements);












// const listElement = document.querySelector('#ingredients');
// console.log(listElement);
  
//  const itemStrElem = ingredients.map((ingredient) => {
//   return `<li class="item">${ingredient}</li>`
//  });

//  const arrToStringElem = `${itemStrElem.join('')}`
//  console.log(arrToStringElem);

// const listEl = listElement.insertAdjacentHTML('beforeend', arrToStringElem);








  
  
  








