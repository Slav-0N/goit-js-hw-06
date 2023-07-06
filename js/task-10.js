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
    // Не зрозумів щодо amount. Чому його треба винести в змінну? Бо в задачі сказано: "Створи функцію createBoxes(amount)"   Чи то, просто, є така можливість?...
  // console.log(amount);
  const inputNumber = inputEl.value;
  const newContainer = document.createElement('div');
  const stepEl = Number(inputEl.getAttribute('step'));
  const minEl = Number(inputEl.getAttribute('min'));
  const maxEl = Number(inputEl.getAttribute('max'));

  if (inputNumber < minEl || inputNumber >  maxEl) {
    alert('Введіть число від 1 до 100 включно!');
  } else {

    for (let i = 1; i <= inputNumber; i += stepEl) {
      const newBox = document.createElement('div');
      newBox.style.width=`${30+i*10}px`;
      newBox.style.height=`${30+i*10}px`;
      newBox.style.backgroundColor=getRandomHexColor();
      newBox.style.marginBottom="20px";
      newContainer.append(newBox);
    }
    const texnewBox = newContainer.innerHTML;
    boxesEl.insertAdjacentHTML('beforeend', texnewBox);
    };
};

destroyBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};









// const texnewBox = newContainer.innerHTML;
// boxesEl.insertAdjacentHTML('afterbegin', texnewBox);

