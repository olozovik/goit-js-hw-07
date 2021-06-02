/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие 
  input), подставляет его текущее значение в span#name-output. Если инпут пустой, 
  в спане должна отображаться строка 'незнакомец'.  */

const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};

const onGetNameInput = elem => {
  refs.nameSpan.textContent = elem.currentTarget.value;

  if (refs.nameSpan.textContent.length === 0) {
    refs.nameSpan.textContent = 'незнакомец';
  }
};

refs.input.addEventListener('input', onGetNameInput);
