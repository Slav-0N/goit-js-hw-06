
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
const incrementBtn = document.querySelector('[data-action="increment"]');



decrementBtn.addEventListener("click", minusOnwElem);
incrementBtn.addEventListener("click", plusOnwElem);

console.log(counterValue);



