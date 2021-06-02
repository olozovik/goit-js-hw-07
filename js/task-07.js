/* Напиши скрипт, который реагирует на изменение значения input#font-size-control 
(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста. */

const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const startValueRange = Number(rangeEl.value);

const startFontSize = Number.parseInt(
  window.getComputedStyle(textEl, null).getPropertyValue('font-size'),
);

const onChangeFontSizeText = elem => {
  const changeValue = elem.currentTarget.value - startValueRange;
  const fontSize = startFontSize + changeValue;
  textEl.style.fontSize = `${fontSize}px`;
};

rangeEl.addEventListener('input', onChangeFontSizeText);
