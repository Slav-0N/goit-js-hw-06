const nameInputEl = document.querySelector('#name-input');
console.log(nameInputEl);

const nameInputText = document.querySelector('#name-output');
console.log(nameInputText);


// nameInputEl.addEventListener('focus', greetingNameEl);
nameInputEl.addEventListener('input', greetingNameEl);




function greetingNameEl (event) {
  const realNameEl = event.currentTarget.value;

  if (realNameEl === '') {
    nameInputText.textContent = 'Anonymous';  
  
  } else {
    console.log(realNameEl);
    nameInputText.textContent = realNameEl;
  };
  
 

};

