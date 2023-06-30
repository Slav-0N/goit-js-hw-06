function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetElem = document.querySelector('.widget');

widgetElem.addEventListener('click', event => {
  const bodyColorEl = document.querySelector('body');
  const newColor = getRandomHexColor();

  bodyColorEl.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor; 

});





