let items = document.querySelectorAll(".item");
console.log(`Number of categories:`,  items.length);
console.log(``);

let headerElementArray = document.querySelectorAll('.item');



headerElementArray.forEach(element => {
  // let titleEl = element.querySelector('h2') 
  let titleEl = element.firstElementChild;

  
  let liQuantityEl = element.querySelectorAll('li');
  console.log(`Category:`, titleEl.textContent);
  console.log(`Elements: ${liQuantityEl.length}`);
  console.log(``);
});



