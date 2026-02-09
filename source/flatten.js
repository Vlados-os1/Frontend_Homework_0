'use strict';

/**
 * Функция, раскладывающая вложенный массив в плоский
 * @param {Array<*>} array - исходный массив
 *
 * @example
 * // returns [1, 2, 3, 4]
 * flatten([1, [2, [3]], 4]);
 *
 * @returns {Array<*>}
 */
const flatten = array => {
    const result = [];

    array.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
            return;
        }
        result.push(item);
    });

    return result;
};
