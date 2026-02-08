'use strict';

/**
 * Функция, которая разделяет массив на два подмассива на основе предиката.
 * Элементы, удовлетворяющие предикату, попадают в первый подмассив,
 * остальные - во второй
 * 
 * @param {Array} array - массив элементов
 * @param {Function} callback - предикат, возвращает boolean.
 * 
 * @example
 * // returns [[2, 4], [1, 3]]
 * partition([1, 2, 3, 4], n => n % 2 === 0);
 * 
 * @returns {Array<Array>} массив из двух массивов
 */
const partition = (array, callback) => {
  const passed = [];
  const failed = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) {
      passed.push(item);
    } else {
      failed.push(item);
    }
  }

  return [passed, failed];
};
