'use strict';

QUnit.module("Тестируем функцию fibonacciGenerator", function() {
    QUnit.test("Правильно генерирует первое число Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(1);

        assert.deepEqual([...fibGen], [0], "Должно быть сгенерировано только первое число Фибоначчи.");
    });

    QUnit.test("Правильно генерирует два первых числа Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(2);

        assert.deepEqual([...fibGen], [0, 1], "Должны быть сгенерированы 2 первых числа Фибоначчи.");
    });
    
    QUnit.test("Правильно генерирует 5 первых чисел Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(5);

        assert.deepEqual([...fibGen], [0, 1, 1, 2, 3], "Должны быть сгенерированы первые 5 чисел Фибоначчи.");
    });

    QUnit.test("Генерирует для бесконечности (проверка для первых 3х)", function(assert) {
        const fibGen = fibonacciGenerator(Infinity);
        
        let a = fibGen.next().value;
        assert.equal(a, 0, "Первое число должно быть 0");

        a = fibGen.next().value;
        assert.equal(a, 1, "Второе число должно быть 1");

        fibGen.next().value;
        assert.equal(a, 1, "Третье число должно быть 1");
    });

    QUnit.test("Не генерирует для минус бесконечности", function(assert) {
        const fibGen = fibonacciGenerator(-Infinity);
        
         assert.deepEqual([...fibGen], [], "Генерация для -Infinity числа должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с отрицательным числом", function(assert) {
        const fibGen = fibonacciGenerator(-5);

        assert.deepEqual([...fibGen], [], "Генерация отрицательного числа должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с 0", function(assert) {
        const fibGen = fibonacciGenerator(0);

        assert.deepEqual([...fibGen], [], "Генерация для 0 должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с undefined", function(assert) {
        const fibGen = fibonacciGenerator(undefined);

        assert.deepEqual([...fibGen], [], "Генерация для undefined должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с NaN", function(assert) {
        const fibGen = fibonacciGenerator(NaN);

        assert.deepEqual([...fibGen], [], "Генерация для NaN должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с null", function(assert) {
        const fibGen = fibonacciGenerator(null);

        assert.deepEqual([...fibGen], [], "Генерация для null должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно со строкой", function(assert) {
        const fibGen = fibonacciGenerator('hello');

        assert.deepEqual([...fibGen], [], "Генерация для строки должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с числом в строковом представлении (считаем, что это невалидно)", function(assert) {
        const fibGen = fibonacciGenerator('1');

        assert.deepEqual([...fibGen], [], "Генерация для числа в строковом представлении должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с объектом", function(assert) {
        const obj = {
            num: 2,
        };
        const fibGen = fibonacciGenerator(obj);

        assert.deepEqual([...fibGen], [], "Генерация для объекта должна вернуть пустой массив.");
    });
});
