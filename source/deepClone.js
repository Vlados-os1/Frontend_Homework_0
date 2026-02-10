'use strict';

/**
 * Функция, создающая глубокую копию объекта
 * @param {Object} obj - объект для копирования
 * 
 * @example
 * // returns { a: 1, b: { c: 2 } }
 * const original = { a: 1, b: { c: 2 } };
 * const copy = deepClone(original);
 * 
 * @returns {Object}
 */
const deepClone = obj => structuredClone(obj);
