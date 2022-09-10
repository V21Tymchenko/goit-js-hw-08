import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
dataFromLocalStorage();
const formData = {};

function onFormData(e) {
  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  //   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage(ev) {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
