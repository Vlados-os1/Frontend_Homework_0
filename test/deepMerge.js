'use strict';

QUnit.module("Тестируем функцию deepMerge", function() {
    QUnit.test("Работает правильно с вложенными объектами", function(assert) {
        const source = {
            user: {
                name: "Alice",
                age: 25,
                address: {
                    city: "Wonderland",
                    zip: 12345
                }
            },
            hobbies: ["reading", "gaming"]
        };

        const target = {
            user: {
                age: 30,
                address: {
                    country: "Fantasyland"
                }
            },
            hobbies: ["traveling"],
            isActive: true
        };

        const expected = {
            user: {
                name: "Alice",
                age: 30,
                address: {
                    city: "Wonderland",
                    zip: 12345,
                    country: "Fantasyland"
                }
            },
            hobbies: ["traveling"],
            isActive: true
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "Должно работать правильно с вложенными объектами");
    });

    QUnit.test("Работает правильно с невложенными объектами", function(assert) {
        const source = {
            name: "Алиса",
            age: 25,
        };

        const target = {
            age: 30,
            isInWonderland: true,
        };

        const expected = {
            name: "Алиса",
            age: 30,
            isInWonderland: true,
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "Должно правильно перезаписывать ключи");
    });

    QUnit.test("Работает с пустым исходным объектом", function(assert) {
        const source = {
            name: "Алиса",
            age: 25
        };

        const target = {};

        const expected = {
            name: "Алиса",
            age: 25,
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "Должно возвращать исходный объект при отсутствии второго");
    });

    QUnit.test("Работает с пустым целевым объектом", function(assert) {
        const source = {};

        const target = {
            name: "Алиса",
            age: 25,
        };

        const expected = {
            name: "Алиса",
            age: 25,
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "Должно возвращать исходный объект при отсутствии второго");
    });

    QUnit.test("Обрабатывает null корректно", function(assert) {
        const source = {
            user: {
                name: "Alice",
                address: {
                    city: "London",
                    street: "Baker"
                }
            }
        };

        const target = {
            user: {
                address: null // null должен заменять объект
            }
        };

        const expected = {
            user: {
                name: "Alice",
                address: null
            }
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "null должен заменять существующее значение");
    });

    QUnit.test("Обрабатывает undefined корректно", function(assert) {
    const source = {
        name: "Alice",
        age: 25
    };

    const target = {
        age: undefined // undefined должен заменять значение
    };

    const expected = {
        name: "Alice",
        age: undefined
    };

    const result = deepMerge(source, target);
    assert.deepEqual(result, expected, "undefined должен заменять существующее значение");
    });

    QUnit.test("Должна корректно перезаписывать значение объектом и наоборот", function(assert) {
        const source = {
            data: 123,
            config: { old: true }
        };

        const target = {
            data: { new: "value" }, // Число заменяется объектом
            config: "reset"         // Объект заменяется строкой
        };

        const expected = {
            data: { new: "value" },
            config: "reset"
        };

        const result = deepMerge(source, target);
        assert.deepEqual(result, expected, "Смена типов данных должна проходить корректно");
    });
});
