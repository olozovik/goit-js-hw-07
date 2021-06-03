/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов. */

const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));

// const onCheckInputBlur = event => {
//   if (event.currentTarget.value.length === inputLength) {
//     event.currentTarget.classList.contains('invalid')
//       ? event.currentTarget.classList.replace('invalid', 'valid')
//       : event.currentTarget.classList.add('valid');
//   } else {
//     event.currentTarget.classList.contains('valid')
//       ? event.currentTarget.classList.replace('valid', 'invalid')
//       : event.currentTarget.classList.add('invalid');
//   }
// };

const addClass = (elem, classInput) => {
  if (classInput === 'valid') {
    elem.classList.add('valid');
    elem.classList.remove('invalid');
  } else {
    elem.classList.add('invalid');
    elem.classList.remove('vainvalid');
  }
};

const onCheckInputBlur = event => {
  if (event.currentTarget.value.length === inputLength) {
    addClass(event.currentTarget, 'valid');
  } else {
    addClass(event.currentTarget, 'invalid');
  }
};

inputEl.addEventListener('blur', onCheckInputBlur);
