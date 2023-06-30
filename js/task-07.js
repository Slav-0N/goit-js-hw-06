const fontSizeControlEl = document.querySelector('#font-size-control');
// const fonSizeEl = fontSizeControlEl.value;

const changeFontSize = event => {
  const pickedFontSize = event.currentTarget.value;
  console.log(pickedFontSize);
  const textEl = document.querySelector('#text');
  console.log(textEl.style.fontSize = `${pickedFontSize}px`);

};


fontSizeControlEl.addEventListener('input', changeFontSize);


