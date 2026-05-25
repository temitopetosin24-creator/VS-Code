const main = document.querySelector('main');
const button = document.getElementById('changeTextButton');
const resetButton = document.getElementById('resetButton');
const backButton = document.getElementById('backButton');
const message = document.getElementById('message');
const nameInput = document.getElementById('nameInput');
const welcomePage = document.getElementById('welcomePage');
const welcomeTitle = document.getElementById('welcomeTitle');

button.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (name) {
    welcomeTitle.textContent = `Welcome, ${name}!`;
    main.classList.add('hidden');
    welcomePage.classList.remove('hidden');
  } else {
    message.textContent = 'Hello! Welcome to your simple project.';
  }
});

resetButton.addEventListener('click', () => {
  nameInput.value = '';
  message.textContent = 'Hello! Welcome to your simple project.';
  nameInput.focus();
});

backButton.addEventListener('click', () => {
  welcomePage.classList.add('hidden');
  main.classList.remove('hidden');
  message.textContent = 'Hello! Welcome to your simple project.';
  nameInput.focus();
});
