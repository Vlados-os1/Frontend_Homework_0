'use strict';

/**
 * Функция, вычисляющая факториал неотрицательного целого числа
 * @param {Number} n - неотрицательное целое число
 *
 * @example
 * // returns 120
 * factorial(5);
 *
 * @returns {Number}
 * @throws {Error} Факториал не определен для отрицательных чисел
 */
const factorial = (n) => {
    if (n < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
};
