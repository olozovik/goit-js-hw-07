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

const getRandomNumber = () => Math.round(Math.random() * (255 - 0));

const getRandomRgbColor = () => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

const createBoxes = amount => {
  const boxesArr = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomRgbColor();
    boxesArr.push(newBox);
    size += 10;
  }

  refs.boxes.append(...boxesArr);
};

const onCreateBoxesClick = () => {
  refs.boxes.innerHTML = '';
  quantity = Number.parseInt(refs.input.value);
  createBoxes(quantity);
};

refs.buttonCreate.addEventListener('click', onCreateBoxesClick);

const onClearBoxesClick = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
};

refs.buttonClear.addEventListener('click', onClearBoxesClick);
