'use strict';

QUnit.module('Тестируем функцию deepClone', () => {
    QUnit.test('Работает правильного для простого объекта', (assert) => {
        const original = { a: 1, b: 2 };
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

    QUnit.test('Работает правильно для null', (assert) => {
        const original = null;
        const cloned = deepClone(original);

        assert.strictEqual(cloned, original, 'Копия null должна быть null');
    });

    QUnit.test('Работает правильно для даты', (assert) => {
        const original = new Date();
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия даты должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия даты должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильно для Set', (assert) => {
        const original = new Set([1, 2, 3]);
        const cloned = deepClone(original);

        assert.deepEqual([...cloned], [...original], 'Копия Set должна содержать те же элементы');
        assert.notStrictEqual(cloned, original, 'Set должен быть независимым объектом');
    });

    QUnit.test('Работает правильно для Map', (assert) => {
        const original = new Map([['a', 1], ['b', 2]]);
        const cloned = deepClone(original);

        assert.deepEqual([...cloned], [...original], 'Копия Map должна содержать те же пары ключ-значение');
        assert.notStrictEqual(cloned, original, 'Map должен быть независимым объектом');
    });

    QUnit.test('Работает правильно для вложенных массивов', (assert) => {
        const original = [[1, 2], [3, 4]];
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия вложенных массивов должна быть равна оригиналу');
        assert.notStrictEqual(cloned[0], original[0], 'Вложенные массивы должны быть независимыми');
        assert.notStrictEqual(cloned[1], original[1], 'Вложенные массивы должны быть независимыми');
    });
});
