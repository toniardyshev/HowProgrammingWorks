Итерирование циклами

Реализуйте функцию sum(...args), которая суммирует все свои аргументы, пятью разными способами. Примеры вызовов с результатами:

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
Цикл for
Цикл for..of
Цикл while
Цикл do..while
Метод Array.prototype.reduce()


Итерирование по двумерному массиву

Найдите максимальный элемент в двумерном массиве
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9


Итерирование объектов-справочников

При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей и вернуть справочник с продолжительностью их жизни. Например:
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }