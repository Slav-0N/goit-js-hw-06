const loginFormEl = document.querySelector('.login-form');


loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  // console.log(event.currentTarget.elements);

  const {elements: {email, password}} = event.currentTarget;

  if (email.value === '' || password.value === '') {
    window.alert('Всі поля повинні бути заповнені') = alert();
  };

  const userDataObjEl = {};
  userDataObjEl.email = email.value;
  userDataObjEl.password = password.value;
  console.log(userDataObjEl);
  event.currentTarget.reset();

});


