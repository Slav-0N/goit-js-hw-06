const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const minFontSize = Number(fontSizeControlEl.getAttribute("min"));
const maxFontSize = Number(fontSizeControlEl.getAttribute("max"));

const changeFontSize = (event) => {
  const pickedFontSize = event.currentTarget.value;
  textEl.style.fontSize = `${pickedFontSize}px`;

};

const setStartFontSize = () => {
  const silentlSize = minFontSize + (maxFontSize - minFontSize) / 2;
  textEl.style.fontSize = `${silentlSize}px`;
};

setStartFontSize();
// геть не зрозумів, що я мав зробити замість цієї функції.  :) 


fontSizeControlEl.addEventListener('input', changeFontSize);