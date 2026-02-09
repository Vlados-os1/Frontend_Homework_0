'use strict';

/**
 * Функция (генератор), генерирующая первые number чисел последовательности Фибоначчи
 * 
 * @generator
 * @param {Number} number - количество чисел в последовательности Фибоначчи
 * @yields {Number} Следующее число в последовательности Фибоначчи
 */
function* fibonacciGenerator(number) {
    if ((!Number.isInteger(number) && number !== Infinity) 
        || number <= 0) return;

    yield 0;
    if (number == 1) return;

    yield 1;
    if (number == 2) return;

    let a = 0,
        b = 1;
    for (let i = 0; i + 2 < number; ++i) {
        [a, b] = [b, a + b]
        yield b;
    }
}