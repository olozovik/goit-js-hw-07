/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const refs = {
  value: document.querySelector('#value'),
  addBtn: document.querySelector('[data-action="increment"]'),
  subBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

refs.addBtn.addEventListener('click', increment);
refs.subBtn.addEventListener('click', decrement);
