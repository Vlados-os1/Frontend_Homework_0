'use strict';

/**
 * Функция удаляет из объекта свойства со значениями null, undefined или пустой строкой.
 * @param {Object} obj - исходный объект
 * @returns {Object} - новый объект без "пустых" значений
 * @throws {Error} - если аргумент не является объектом
 *
 * @example
 * // returns { name: "Иван" }
 * compressObject({ name: "Иван", age: null, comment: "" });
 */
const compressObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('compressObject: expected an object, but got ' + typeof obj);
  }

  const result = {};

  Object.keys(obj).forEach( (key) => {
    const value = obj[key];
    if ( value !== null && value !== undefined && value !== "" ) {
      result[key] = value;
    }
  }) 

  return result
}