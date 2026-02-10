'use strict';

/**
 * Функция находит уникальные свойства в двух объектах
 * @param {Object} firstObject - первый объект
 * @param {Object} secondObject - второй объект
 *
 * @example
 * // returns { a: 1, d: 5 }
 * findUniqueProperties({ a: 1, b: 2 }, { b: 2, d: 5 });
 *
 * @returns {Object}
 */
const findUniqueProperties = function (firstObject, secondObject) {
    const result = {};

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    for (let i = 0; i < firstKeys.length; i++) {
        const key = firstKeys[i];

        if (!(key in secondObject)) {
            result[key] = firstObject[key];
        }
    }

    for (let i = 0; i < secondKeys.length; i++) {
        const key = secondKeys[i];

        if (!(key in firstObject)) {
            result[key] = secondObject[key];
        }
    }

    return result;
};
