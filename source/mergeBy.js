'use strict';

/**
 * Функция, объединяющая объекты из обоих массивов по указанному ключу
 * @param {Array<Object>} objects1 - первый массив объектов
 * @param {Array<Object>} objects2 - второй массив объектов
 * @param {String} key - ключ для объеденения объектов
 * 
 * @example
 * // returns [{name: "Andrey", city: "Moscow", age: 10}, {name: "Vova", city: "Saint-Petersburg"}]
 * mergeBy([{name: "Andrey", city: "Moscow"}, {name: "Vova", city: "Saint-Petersburg"}], [{age: 10, city: "Moscow"}], "city");
 * 
 * @returns {Array<Object>}
 */
const mergeBy = (objects1, objects2, key) => {
    const map = new Map();
    const result = [];

    objects1.forEach(object => {
            const value = object[key];
            if (value !== undefined)
                map.set(value, _.cloneDeep(object));
        }
    );

    objects2.forEach(object => {
        const value = object[key];
        if (value == undefined)
            return;
        if (map.has(value)) {
            const objectInMap = map.get(value);
            map.set(value, mergeObjects(objectInMap, object, key));
        }
        else
            map.set(value, _.cloneDeep(object));
    });

    map.forEach(value => result.push(value));

    return result;
}

/**
 * Функция, объединяющая два объекта по указанному ключу
 * @param {Object} object1 - первый объект
 * @param {Object} object2 - второй объект
 * @param {String} key - ключ для объеденения объектов
 * 
 * @example
 * // returns [{name: "Andrey", city: "Moscow", age: 10}]
 * mergeObjects({name: "Andrey", city: "Moscow"}, {age: 10, city: "Moscow"}, "city");
 * 
 * @returns {Array<Object>}
 */
const mergeObjects = (object1, object2, key) => {
    const mergeObject = _.cloneDeep(object1);

    Object.keys(object2).forEach(prop => {
        if (prop == key)
            return;

        const value1 = object1[prop];
        const value2 = object2[prop];

        if (value1 == undefined)
            mergeObject[prop] = _.cloneDeep(value2);
        else if (Array.isArray(value1) && Array.isArray(value2))
            mergeObject[prop] = mergeArrays(value1, value2);
        else if (_.isObject(value1) && _.isObject(value2))
            mergeObject[prop] = mergeObjects(value1, value2, "");
    });

    return mergeObject;
}

/**
 * Функция, объединяющая два массива без дубликатов
 * @param {Array} object1 - первый массив
 * @param {Array} object2 - второй массив
 * 
 * @example
 * // returns [1, 2, 3, 4]
 * mergeArrays([1, 2, 3], [3, 4]);
 * 
 * @returns {Array}
 */
const mergeArrays = (array1, array2) => {
    const mergeArray = [];

    /**
     * Функция, добавляющая уникальные значения из массива в результат
     * @param {Array} object1 - исходный массив
     * 
     * @example
     * // returns [1, 2, 3]
     * addingUniqueValues([1, 2, 3, 2, 1]);
     * 
     * @returns {void}
     */
    const addingUniqueValues = (array) => {
        array.forEach(element => {
            const isDuplicate = mergeArray.some(elementInResult => _.isEqual(elementInResult, element));
            if (!isDuplicate)
                mergeArray.push(_.cloneDeep(element));
        });
    }

    addingUniqueValues(array1);
    addingUniqueValues(array2);

    return mergeArray;
}
