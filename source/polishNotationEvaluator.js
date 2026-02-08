'use strict';

/**
 * Функция, вычисляющая выражение в префиксной нотации
 * @param {string} expression - исходное выражение
 *
 * @example
 * // returns 3
 * polishNotationEvaluator("+ 1 2");
 *
 * @returns {number} - результат вычисления выражения
 */

const polishNotationEvaluator = (expression) => {
    const tokens = expression.split(' ');
    const stack = [];

    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];

        // Пропускаем пустые строки
        if (token === '') continue;

        // Если токен - число
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            // Токен - оператор
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    console.error(`Неизвестный оператор: ${token}`);
            }
        }
    }

    // Финальный результат лежит в вершине стека
    return stack[0];
};
