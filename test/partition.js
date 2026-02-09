/* eslint-disable require-jsdoc */

'use strict';

QUnit.module("Тестируем функцию partition", function() {
    QUnit.test("Работает правильно при разделении массива на основе предиката", function(assert) {
        const isEven = num => num % 2 === 0;
        const result = partition([1, 2, 3, 4, 5, 6], isEven);

        assert.deepEqual(result, [
            [2, 4, 6],
            [1, 3, 5]
        ]);
    });

    QUnit.test("Работает правильно при разделении с предикатом, возвращающим true для всех элементов", function(assert) {
        const isPositive = num => num > 0;
        const result = partition([1, 2, 3, 4, 5], isPositive);

        assert.deepEqual(result, [
            [1, 2, 3, 4, 5],
            []
        ]);
    });

    QUnit.test("Правильно делит массив объектов по свойству", function(assert) {
        const isAdult = person => person.age >= 18;
        const result = partition([
            { name: "Alice", age: 17 },
            { name: "Bob", age: 20 },
            { name: "Charlie", age: 15 },
            { name: "David", age: 22 }
        ], isAdult);
        assert.deepEqual(result, [
            [
                { name: "Bob", age: 20 },
                { name: "David", age: 22 }
            ],
            [
                { name: "Alice", age: 17 },
                { name: "Charlie", age: 15 }
            ]
        ]);
    });

    // Defined test
    QUnit.test("Работает правильно при разделении с предикатом, возвращающим false для всех элементов", function(assert) {
        const isNegative = num => num < 0;
        const result = partition([1, 2, 3, 4, 5], isNegative);

        assert.deepEqual(result, [
            [],
            [1, 2, 3, 4, 5]
        ]);
    });

    QUnit.test("Обрабатывает передачу null параметра в качестве массива", function(assert) {
        const isPositive = num => num > 0;
        
        const result = partition(null, isPositive);

        assert.deepEqual(result, [[], []]);
    });

    QUnit.test("Обрабатывает передачу undefined параметра в качестве массива", function(assert) {
        const isPositive = num => num > 0;
        
        const result = partition(undefined, isPositive);

        assert.deepEqual(result, [[], []]);
    });

    QUnit.test("Правильное раздаление массива с различными типами данных", function(assert) {
        const isTrue = item => Boolean(item) 

        const result = partition([
            0, 1, -1, NaN,
            "", "hello",
            true, false,
            null, undefined,
            {}, {a:1}, [],
            Symbol("s"),
            () => {}
        ], isTrue);

        assert.equal(result[0].length, 9);
        assert.equal(result[1].length, 6);

        result[0].forEach(el => assert.ok(Boolean(el)));
        result[1].forEach(el => assert.ok(!el));
    });

    QUnit.test("Обрабатывает передачу пустого массива", function(assert) {
        const isPositive = num => num > 0;
        
        const result = partition([], isPositive);

        assert.deepEqual(result, [[], []]);
    });

    QUnit.test("Обрабатывает передачу null функции-предиката", function(assert) {
        const isPositive = num => num > 0;
        
        const result = partition([], null);

        assert.deepEqual(result, [[], []]);
    });

    QUnit.test("Обрабатывает передачу undefined функции-предиката", function(assert) {
        const isPositive = num => num > 0;
        
        const result = partition([], undefined);

        assert.deepEqual(result, [[], []]);
    });
});
