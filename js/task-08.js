/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
количество элементов в input и нажимает кнопку Создать, после чего рендерится 
коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */

const refs = {
  input: document.querySelector('#controls input'),
  buttonCreate: document.querySelector('[data-action="render"]'),
  buttonClear: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

let quantity = 0;
let width = 30;
let height = 30;

const createBoxes = amount => {
  const boxesArr = [];
  const randomColor = () => Math.round(Math.random() * (255 - 0));

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${width}px`;
    newBox.style.height = `${width}px`;
    newBox.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    boxesArr.push(newBox);
    width += 10;
    height += 10;
  }

  refs.boxes.append(...boxesArr);
};

refs.buttonCreate.addEventListener('click', () => {
  quantity = Number.parseInt(refs.input.value);
  createBoxes(quantity);
});

refs.buttonClear.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
});
