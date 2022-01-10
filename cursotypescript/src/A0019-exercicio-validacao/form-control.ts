const SHOW_ERROR_MESSAGES = 'show-error-message';
import validator from 'validator';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const camps = [username, email, password, password2];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = validation();

  if (result) form.submit();
});

function validation(): boolean {
  const errors = [];
  if (isEmpty()) errors.push('campo vazio');
  if (!validateEmail()) errors.push('Email invalido');
  if (!passwordValidate()) errors.push('Senhas diferentes');

  if (errors.length !== 0) return false;
  return true;
}

function validateEmail(): boolean {
  if (validator.isEmail(email.value)) return true;
  const father = email.parentElement as HTMLFormElement;
  const message = father.querySelector('.error-message') as HTMLSpanElement;
  // ou innerText
  message.innerHTML = 'Email precisa ser valido';
  father.classList.add(SHOW_ERROR_MESSAGES);
  return false;
}

function passwordValidate(): boolean {
  if (password.value === password2.value) return true;
  const father = password2.parentElement as HTMLFormElement;
  const message = father.querySelector('.error-message') as HTMLSpanElement;
  message.innerHTML = 'As senhas devem ser iguais';
  father.classList.add(SHOW_ERROR_MESSAGES);
  return false;
}

function isEmpty(): boolean {
  let empty = false;
  for (let i = 0; i <= 3; i++) {
    const element: HTMLInputElement = camps[i] as HTMLInputElement;
    if (element.value === '') {
      const father = element.parentElement as HTMLFormElement;
      const message = father.querySelector(
        '.error-message',
      ) as HTMLInputElement;
      message.innerHTML = 'Campo está vazio';
      father.classList.add(SHOW_ERROR_MESSAGES);
      empty = true;
    }

    if (element.value !== '') {
      const father = element.parentElement as HTMLFormElement;
      father.classList.remove(SHOW_ERROR_MESSAGES);
    }
  }

  return empty;
}
