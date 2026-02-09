'use strict';

/**
 * Функция, сортирующая массив чисел по частоте. Если два элемента имеют одинаковую частоту, они должны быть отсортированы по возрастанию.
 * @param {Array<Number>} numbers - исходный массив чисел
 * 
 * @example
 * // returns [2, 2, 2, 2, 4, 4, 4, 6, 6]
 * sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);
 * 
 * @returns {Array<Number>} - отсортированный по частоте массив чисел
 */
const sortByFrequency = numbers => {
    const frequency = new Map();
    numbers.forEach(number => {
        frequency.set(number, (frequency.get(number) || 0) + 1);
    });

    return [...numbers].sort((val1, val2) => {
        let diff = frequency.get(val2) - frequency.get(val1);
        if (diff !== 0) return diff;
        return val1 - val2;
    });
};