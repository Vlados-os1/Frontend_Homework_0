'use strict';

/**
 * Функция удаляет из объекта свойства со значениями null, undefined или пустой строкой.
 * @param {Object} obj - исходный объект
 * @returns {Object} - новый объект без "пустых" значений
 *
 * @example
 * // returns { name: "Иван" }
 * compressObject({ name: "Иван", age: null, comment: "" });
 */
const compressObject = (obj) => {
  const result = {};

  Object.keys(obj).forEach( (key) => {
    const value = obj[key];
    if ( value !== null && value !== undefined && value !== "" ) {
      result[key] = value;
    }
  }) 

  return result
}