const nameInputEl = document.querySelector('#name-input');
console.log(nameInputEl);

const nameInputText = document.querySelector('#name-output');
console.log(nameInputText);


// nameInputEl.addEventListener('focus', greetingNameEl);
nameInputEl.addEventListener('input', greetingNameEl);




function greetingNameEl (event) {
  const realNameEl = event.currentTarget.value.trim();
  // console.log(realNameEl.length);
  // const withoutASpaces = realNameEl.trim();
  // console.log(withoutASpaces.length)

  if (realNameEl === '') {
    nameInputText.textContent = 'Anonymous';  
  
  } else {
    console.log(realNameEl);
    nameInputText.textContent = realNameEl;
  };
  
 
};

