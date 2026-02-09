'use strict';

/**
 * Выполняет глубокое клонирование объекта, включая вложенные объекты, массивы, Set, Map и примитивные типы.
 * @param {any} obj - Объект для клонирования. Может быть любого типа: объект, массив, Set, Map, примитив.
 * @returns {any} Копия переданного объекта.
 *
 * @example
 * // Клонирование объекта.
 * const obj = { a: 1, b: { c: 2 } };
 * const copy = deepClone(obj);
 * console.log(copy.b.c); // 2
 *
 * @example
 * // Клонирование массива.
 * const arr = [1, 2, { a: 3 }];
 * const copyArr = deepClone(arr);
 * console.log(copyArr[2].a); // 3
 *
 * @example
 * // Клонирование Set.
 * const set = new Set([1, 2, { a: 3 }]);
 * const copySet = deepClone(set);
 *
 * @example
 * // Клонирование Map.
 * const map = new Map([['key1', { val: 1 }]]);
 * const copyMap = deepClone(map);
 *
 * @example
 * // Клонирование примитивов.
 * deepClone(42); // 42
 * deepClone('text'); // 'text'
 * deepClone(null); // null
 */
const deepClone = function (obj) {
    if (obj === null)
        return null;
    if (typeof obj !== 'object')
        return obj;

    if (obj instanceof Array) {
        let copy = [];
        for (let i = 0; i < obj.length; i++)
            copy[i] = deepClone(obj[i]);
        return copy;
    }
    if (obj instanceof Set) {
        let copy = new Set();
        obj.forEach(item => {
            copy.add(deepClone(item));
        });
        return copy;
    }
    if (obj instanceof Map) {
        let copy = new Map();
        obj.forEach((value, key) => {
            copy.set(key, deepClone(value));
        });
        return copy;
    }

    let copy = {};
    for (let key in obj)
        if (Object.hasOwn(obj, key))
            copy[key] = deepClone(obj[key]);
    return copy;
}
