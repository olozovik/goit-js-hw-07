/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть 
элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет 
в консоль текст заголовка элемента (тега h2) и количество элементов в 
категории (всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4 */

// Вариант 1:

const categoryEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryEl.length} категории.`);

categoryEl.forEach(item => {
  const titleEl = item.querySelector('h2');
  console.log(`Категория: ${titleEl.textContent}`);
  const listEl = item.querySelector('ul');
  console.log(`Количество элементов: ${listEl.children.length}`);
});

// Варинт 2:

// const categoriesEl = document.querySelector('#categories');
// const categoryEl = categoriesEl.children;
// console.log(`В списке ${categoryEl.length} категории.`);

// for (const item of categoryEl) {
//   const titleEl = item.querySelector('h2');
//   console.log(`Категория: ${titleEl.textContent}`);
//   const listEl = item.querySelector('ul');
//   console.log(`Количество элементов: ${listEl.children.length}`);
// }
