/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов. */

const inputEl = document.querySelector('#validation-input');

const onCheckInputBlur = event => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.contains('invalid')
      ? event.currentTarget.classList.replace('invalid', 'valid')
      : event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.contains('valid')
      ? event.currentTarget.classList.replace('valid', 'invalid')
      : event.currentTarget.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onCheckInputBlur);
