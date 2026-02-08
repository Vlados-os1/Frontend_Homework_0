'use strict';

/**
 * Удаляет из объекта поля со значениями null, undefined и пустой строкой "".
 * Возвращает новый объект, исходный не изменяет.
 *
 * @param {Record<string, any>} obj - исходный объект
 *
 * @example
 * // returns { a: 1 }
 * compressObject({ a: 1, b: null, c: "" });
 * 
 * @returns {Record<string, any>} - новый объект
 */
const compressObject = (obj) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined && value !== '') {
      result[key] = value;
    }
  }

  return result;
};
