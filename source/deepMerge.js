'use strict';

/**
 * Функция, которая принимает два объекта и объединяет их в один.
 * Если оба объекта содержат одинаковые ключи, и значения по этим ключам являются объектами,
 * то они должны быть объединены рекурсивно. Если значения не являются объектами, то значение 
 * из второго объекта должно перезаписывать значение из первого.
 * 
 * @param {Object} targetObj - Целевой объект, из которого берутся значения для объединения
 * @param {Object} sourceObj - Исходный объект, в который будет производиться объединение
 * 
 * @example
 * const source = {
 *     user: {
 *         name: "Alice",
 *         age: 25,
 *         address: {
 *             city: "Wonderland",
 *             zip: 12345
 *         }
 *     },
 *     hobbies: ["reading", "gaming"]
 * };
 * 
 * const target = {
 *     user: {
 *         age: 30,
 *         address: {
 *             country: "Fantasyland"
 *         }
 *     },
 *     hobbies: ["traveling"],
 *     isActive: true
 * };
 * 
 * const result = deepMerge(source, target);
 * // Результат:
 * // {
 * //     user: {
 * //         name: "Alice",
 * //         age: 30,
 * //         address: {
 * //             city: "Wonderland",
 * //             zip: 12345,
 * //             country: "Fantasyland"
 * //         }
 * //     },
 * //     hobbies: ["traveling"],
 * //     isActive: true
 * // }
 * 
 * @returns {Object} - Исходный объект с объединёнными значениями из целевого объекта
 */
function deepMerge(sourceObj, targetObj) {
    for (let key in targetObj) {
        if (key in sourceObj &&
            typeof sourceObj[key] === 'object' &&
            typeof targetObj[key] === 'object' &&
            !Array.isArray(sourceObj[key]) &&
            targetObj[key] !== null &&
            sourceObj[key] !== null) {
            deepMerge(sourceObj[key], targetObj[key]);
        } else {
            sourceObj[key] = targetObj[key];
        }
    }
    return sourceObj;
}