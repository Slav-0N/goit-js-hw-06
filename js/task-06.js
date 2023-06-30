const validationInputEl = document.querySelector('#validation-input');



const changeValidColor = ((event) => {
  // const validDataEl = validationInputEl.classList.add('valid');
  // const invalidDataEl = validationInputEl.classList.add('invalid');
  const typedSymbolsEl = event.currentTarget.value;

  if (typedSymbolsEl.length === 6) {
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.add('invalid');
  }

  
});

validationInputEl.addEventListener('blur', changeValidColor);

