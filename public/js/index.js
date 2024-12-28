import { login, logout } from './login';

const loginForm = document.querySelector('.form');
const logoutButton = document.querySelector('.nav__el--logout');

const email = document.getElementById('email');
const password = document.getElementById('password');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    login(email.value, password.value);
  });

if (logoutButton) logoutButton.addEventListener('click', logout);
