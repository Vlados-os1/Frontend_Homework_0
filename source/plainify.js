'use strict';

/**
 * Превращает вложенный объект в «плоский», соединяя ключи через точку
 * @param {Object} obj - Исходный объект для преобразования
 * @param {string} [prefix=''] - Текущий путь ключей
 *
 * @example
 * // returns { "a": 1, "b.c": 2, "b.d.e": 3 }
 * plainify({
 *      a: 1,
 *      b: {
 *          c: 2,
 *          d: {
 *              e: 3
 *          }
 *      }
 * });
 * @returns {Object} Объект с одноуровневой структурой
 * @throws {TypeError} Если аргумент не является корректным объектом
 */
const plainify = (obj, prefix = '') => {
    /**
     * Проверяет, является ли значение простым объектом Plain Object
     * @param {*} value - Значение для проверки
     * @returns {boolean} True, если это plain object
     */
    const isPlainObject = (value) => {
        return !!value &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        (value.constructor === Object || value.constructor === undefined)
    }

    if (!isPlainObject(obj)) {
        throw TypeError('Переданный аргумент "obj" должен быть объектом Plain Object');
    }

    let result = {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            const value = obj[key];

            if (isPlainObject(value)) {
                const flatObject = plainify(value, newKey);
                Object.assign(result, flatObject);
            } else {
                result[newKey] = value;
            }
        }
    }

    return result;
};
