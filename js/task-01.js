let items = document.querySelectorAll(".item");
console.log(`Кількість категорій в ul#categories, тобто елементів li.item :`,  items.length);

let headerElementArray = document.querySelectorAll('.item');



headerElementArray.forEach(element => {
  let titleEl = element.querySelector('h2') 
  let liQuantityEl = element.querySelectorAll('li');
  console.log(`Категорія із заголовком`, titleEl.textContent, `містить ${liQuantityEl.length} вкладених елемента`);
});



