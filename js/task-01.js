const items = document.querySelectorAll(".item");
console.log(`Number of categories:`,  items.length);
console.log(``);

// const headerElementArray = document.querySelectorAll('.item');



items.forEach(element => {
  // let titleEl = element.querySelector('h2') 
 const titleEl = element.firstElementChild;
 const liQuantityEl = element.lastElementChild.children.length;
  console.log(`Category:`, titleEl.textContent);
  console.log(`Elements: ${liQuantityEl}`);
  console.log(``);
});



