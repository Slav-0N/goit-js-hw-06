function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
function createBoxes(amount) {
  const inputNumber = inputEl.value;
  const newContainer = document.createElement('div');

  for (let i = 1; i <= inputNumber; i += 1) {
    const newBox = document.createElement('div');
    // newBox.setAttribute()
    newBox.style.width=`${30+i*10}px`;
    newBox.style.height=`${30+i*10}px`;
    newBox.style.backgroundColor=getRandomHexColor();
    newBox.style.marginBottom="20px";
    newContainer.append(newBox);
  }
  console.log(newContainer);
  const texnewBox = newContainer.innerHTML;
  boxesEl.insertAdjacentHTML('afterbegin', texnewBox);
};

destroyBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  boxesEl.innerHTML = '';
  
 
};

console.log(inputEl.attributes);
console.log(inputEl.hasAttribute('type'));

inputEl.addEventListener('focus', removeInputValue);
function removeInputValue(event) {
  event.currentTarget.value ='';
}  








// const texnewBox = newContainer.innerHTML;
// boxesEl.insertAdjacentHTML('afterbegin', texnewBox);

