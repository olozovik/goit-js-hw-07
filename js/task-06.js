/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов. */

const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const onCheckInputBlur = elem => {
  if (elem.currentTarget.value.length === 6) {
    elem.currentTarget.classList.contains('invalid')
      ? elem.currentTarget.classList.replace('invalid', 'valid')
      : elem.currentTarget.classList.add('valid');
  } else {
    elem.currentTarget.classList.contains('valid')
      ? elem.currentTarget.classList.replace('valid', 'invalid')
      : elem.currentTarget.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onCheckInputBlur);
