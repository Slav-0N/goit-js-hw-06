const validationInputEl = document.querySelector('#validation-input');



const changeValidColor = event => {
  // const validDataEl = validationInputEl.classList.add('valid');
  // const invalidDataEl = validationInputEl.classList.add('invalid');
  const typedSymbolsEl = event.currentTarget.value;
  console.log(typedSymbolsEl);
  if (typedSymbolsEl.length !== 6) {
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
