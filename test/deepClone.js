'use strict';

QUnit.module('Тестируем функцию deepClone', () => {
    QUnit.test('Работает правильного для простого объекта', (assert) => {
        const original = { a: 1, b: 2 };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильного для простого объекта c Nan', (assert) => {
        const original = { a: 1, b: NaN };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильного для простого объекта c undefined', (assert) => {
        const original = { a: 1, b: undefined };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильного для простого объекта c null', (assert) => {
        const original = { a: 1, b: null };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильно для вложенного объекта', (assert) => {
        const original = { a: 1, b: { c: 2 } };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned.b, original.b, 'Вложенный объект должен быть независимым');
    });

    QUnit.test('Работает правильно для массива', (assert) => {
        const original = [1, 2, { a: 3 }];
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия массива должна быть равна оригиналу');
        assert.notStrictEqual(cloned[2], original[2], 'Вложенный объект в массиве должен быть независимым');
    });

    QUnit.test('Работает правильно для множества', (assert) => {
        const original = new Set([1, 2, { a: 3 }]);
        const cloned = deepClone(original);

        const originalValues = Array.from(original);
        const clonedValues = Array.from(cloned);

        assert.equal(clonedValues[0], originalValues[0], 'Копия должна быть равна оригиналу');
        assert.equal(clonedValues[1], originalValues[1], 'Копия должна быть равна оригиналу');
        assert.deepEqual(clonedValues[2], originalValues[2], 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(clonedValues[2], originalValues[2], 'Вложенный объект должен быть независимым');
    });

    QUnit.test('Работает правильно для словаря', (assert) => {
        const original = new Map([['key1', { val: 1 }]]);
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия словаря должна быть равна оригиналу');
        assert.notStrictEqual(cloned.get('key1'), original.get('key1'), 'Вложенный объект в словаре должен быть независимым');
    });

    QUnit.test('Работает правильно для примитивов', (assert) => {
        const original = 42;
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
    });

    QUnit.test('Работает правильно для примитивов', (assert) => {
        const original = null;
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
    });

    QUnit.test('Работает правильно для примитивов', (assert) => {
        const original = 'text';
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
    });
});
