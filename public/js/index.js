import { login, logout } from './login';
import { updateSettings } from './updateSettings';

const loginForm = document.querySelector('.form--login');
const logoutButton = document.querySelector('.nav__el--logout');
const updateUserDataForm = document.querySelector('.form-user-data');
const updateUserPasswordForm = document.querySelector('.form-user-password');

const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    login(email.value, password.value);
  });

if (logoutButton) logoutButton.addEventListener('click', logout);

if (updateUserDataForm)
  updateUserDataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    updateSettings({ name: name.value, email: email.value }, 'data');
  });

if (updateUserPasswordForm)
  updateUserPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
