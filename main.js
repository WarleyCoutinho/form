const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const errrorMessege = document.querySelector('.msg');

const items = document.querySelector('.items');

const submitButton = document.querySelector('#submit-button');

const setTime = () => {
  setTimeout(() => {
    errrorMessege.textContent = '';
    errrorMessege.classList = '';
  }, 3000);
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '' && emailValue === '') {
    errrorMessege.textContent = 'Required fields';
    errrorMessege.classList = 'error';
    setTime();
    return;
  } else if (nameValue === '') {
    errrorMessege.textContent = 'Required name';
    errrorMessege.classList = 'error';
    setTime();
    return;
  } else if (emailValue === '') {
    errrorMessege.textContent = 'Required email';
    errrorMessege.classList = 'error';
    setTime();
    return;
  } else {
    errrorMessege.textContent = 'Data sent with successes';
    errrorMessege.classList = 'success';
    setTime();
  }

  const li = document.createElement('li');
  li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`;
  items.appendChild(li);

  nameInput.value = '';
  emailInput.value = '';

  setTimeout(() => {
    items.remove();
  }, 3000);
});
