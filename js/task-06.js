const validationInputEl = document.querySelector('#validation-input');

const lengthDataElemv = validationInputEl.dataset.length;
console.log(Number(lengthDataElemv));


const changeValidColor = event => {
  // const validDataEl = validationInputEl.classList.add('valid');
  // const invalidDataEl = validationInputEl.classList.add('invalid');
  const typedSymbolsEl = event.currentTarget.value.trim();
  console.log(typedSymbolsEl, typedSymbolsEl.length);

  if (typedSymbolsEl.length !== Number(lengthDataElemv)) {
    const typedSymbolsEl = event.currentTarget.value;
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
  } else {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
    
  } 
};

validationInputEl.addEventListener('blur', changeValidColor);

const clearForm = ev => {
  console.log(ev.currentTarget.value);
  ev.currentTarget.value = ''; 
  
};
validationInputEl.addEventListener('click', clearForm);
