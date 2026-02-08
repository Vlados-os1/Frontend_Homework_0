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

    QUnit.test("Не удаляет 0 и false", function(assert) {
    const result = compressObject({
        count: 0,
        enabled: false,
        empty: "",
        nothing: null,
    });

    assert.deepEqual(result, { count: 0, enabled: false }, "0 и false должны сохраняться.");
    });

    QUnit.test("Не изменяет исходный объект", function(assert) {
    const source = { a: 1, b: null, c: "" };
    const copyBefore = { ...source };

    compressObject(source);

    assert.deepEqual(source, copyBefore, "Исходный объект не должен изменяться.");
    });

    QUnit.test("Сохраняет пробельные строки (не пустые)", function(assert) {
    const result = compressObject({ a: " ", b: "" });
    assert.deepEqual(result, { a: " " }, "Строка с пробелом не равна пустой строке и должна остаться.");
    });
});
