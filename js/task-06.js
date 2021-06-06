/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов. */

const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);

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
