import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const formFileds = form.elements;
// console.log(formFileds);
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

const formData = {};

function onFormData(e) {
  console.log(e.target.value);
  console.log(formData[e.target.name]);
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage(e) {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    for (const key in data) {
      form.elements[key].value = data[key];
    }
  }
}
