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

const updateClass = (elem, addClass, removeClass) => {
  elem.classList.add(addClass);
  elem.classList.remove(removeClass);
};

const onCheckInputBlur = event => {
  if (event.currentTarget.value.length === inputLength) {
    updateClass(event.currentTarget, 'valid', 'invalid');
  } else {
    updateClass(event.currentTarget, 'invalid', 'valid');
  }
};

inputEl.addEventListener('blur', onCheckInputBlur);
