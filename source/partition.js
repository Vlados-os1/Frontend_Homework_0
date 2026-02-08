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
 * @throws {Error} Если первый аргумент не является массивом
 * @throws {Error} Если второй аргумент не является функцией
 * 
 * @returns {Array<Array>} массив из двух массивов
 */
const partition = (array, callback) => {
  if (!Array.isArray(array)) {
    throw new Error('Первый аргумент должен быть массивом');
  }

  if (typeof callback !== 'function') {
    throw new Error('Второй аргумент должен быть функцией');
  }

  return array.reduce((acc, item) => {
    const targetIndex = callback(item) ? 0 : 1;
    acc[targetIndex].push(item);
    return acc;
  }, [[], []]);
}
