const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const errrorMessege = document.querySelector('.msg');

const items = document.querySelector('.items');

const submitButton = document.querySelector('#submit-button');

const clock = document.querySelector('.clock');

const currentYear = document.querySelector('.currentYear');

const body = document.querySelector('body');

const setTime = () => {
  setTimeout(() => {
    errrorMessege.textContent = '';
    errrorMessege.classList = '';
    body.style.background = '';
  }, 3000);
};

const refreshAuto = () => {
  location.reload();
};

const today = () => {
  const hours = moment().format(' DD/MM/YYYY HH:mm:ss');
  clock.innerHTML = `${hours}`;
};

setInterval(() => {
  today();
}, 1000);

const date = moment().format(' YYYY ');

currentYear.textContent = `${date}`;

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '' && emailValue === '') {
    errrorMessege.textContent = 'required fields';
    errrorMessege.classList = 'error';
    body.style.background = 'red';
    setTime();
    return;
  } else if (nameValue === '') {
    errrorMessege.textContent = 'required name';
    errrorMessege.classList = 'error';
    setTime();
    return;
  } else if (emailValue === '') {
    errrorMessege.textContent = 'required email';
    errrorMessege.classList = 'error';
    setTime();
    return;
  } else {
    errrorMessege.textContent = 'Data sent with successes';
    errrorMessege.classList = 'success';
    body.style.background = '#15803d';
    setTime();
  }

  const li = document.createElement('li');
  li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`;
  items.appendChild(li);

  nameInput.value = '';
  emailInput.value = '';

  setTimeout(() => {
    body.style.background = '';
    items.remove();
    refreshAuto();
  }, 3000);
});
