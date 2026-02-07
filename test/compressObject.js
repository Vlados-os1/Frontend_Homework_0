'use strict';

QUnit.module("Тестируем функцию compressObject", function() {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function(assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function(assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function(assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });

    QUnit.test("Игнорирует символьные ключи (они не попадают в Object.keys)", function (assert) {
        const sym = Symbol('id');
        const obj = {
            name: "Иван",
            [sym]: "secret",
            age: null
        };
        const result = compressObject(obj);
        assert.deepEqual(result, { name: "Иван" }, 'Symbol-ключи игнорируются, как и положено');
    });

    QUnit.test("Сохраняет непустые строки: пробелы, '0', 'false'", function (assert) {
        const input = {
            empty: "",
            space: " ",
            zeroString: "0",
            falseString: "false",
            tab: "\t",
            newline: "\n"
        };
        const expected = {
            space: " ",
            zeroString: "0",
            falseString: "false",
            tab: "\t",
            newline: "\n"
        };
        assert.deepEqual(compressObject(input), expected, 'Только "" удаляется, всё остальное — остаётся');
    });
});
