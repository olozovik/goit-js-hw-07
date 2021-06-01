const titleEl = document.querySelector('.title');
titleEl.textContent = 'Другой текст';

const arr = [1, 2, 3, 4, 5];
const getElemArr = arr.map(item => item * 2);
console.log(getElemArr);
