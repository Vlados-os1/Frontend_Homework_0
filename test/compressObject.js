"use strict";

QUnit.module("Тестируем функцию compressObject", function () {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function (assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined,
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function (assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function (assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пробелами", function (assert) {
        const result = compressObject({
            a: " ",
        });

        assert.deepEqual(result, { a: " " }, "Объект должен вернуть объект, так как не является пустой строкой.");
    });

    QUnit.test("Проверка на типизацию", function (assert) {
        const result = compressObject({
            a: "null",
            b: "undefined",
        });

        assert.deepEqual(result, { a: "null", b: "undefined" }, "Объект должен вернуть все ключи, так как тип значения отличается");
    });

    QUnit.test("Проверка на значения 0 и false", function (assert) {
        const result = compressObject({
            a: 0,
            b: false,
        });

        assert.deepEqual(result, { a: 0, b: false }, "Объект должен вернуть все ключи, так как они имеют тип int и boolean");
    });
});
