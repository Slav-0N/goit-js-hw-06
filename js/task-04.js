
const screenNumberEl = document.querySelector('#value');
let counterValue = 0;

const plusOnwElem = () => {
  counterValue +=1;
  console.log(counterValue);
  screenNumberEl.textContent = counterValue;
};

const minusOnwElem = () => {
  counterValue -=1;
  console.log(counterValue);
  screenNumberEl.textContent = counterValue;
};
  
const decrementBtn = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');



decrementBtn.addEventListener("click", minusOnwElem);
increment.addEventListener("click", plusOnwElem);

console.log(counterValue);



