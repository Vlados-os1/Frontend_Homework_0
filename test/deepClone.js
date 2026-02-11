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

      assert.deepEqual(cloned, original, 'Копия переменной должна быть равна оригиналу');
    });

    QUnit.test('Работает правильно для undefined', (assert) => {
      const original = undefined;
      const cloned = deepClone(original);

      assert.deepEqual(cloned, original, 'Копия переменной должна быть равна оригиналу');
    });

    QUnit.test('Работает правильно для вложенного массива', (assert) => {
      const original = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const cloned = deepClone(original);

      assert.deepEqual(cloned, original, 'Копия массива должна быть равна оригиналу');
      assert.notStrictEqual(cloned[0], original[0], 'Вложенные массивы должны быть независимым');
    });

    QUnit.test('Работает правильно для пустого массива', (assert) => {
      const original = [];
      const cloned = deepClone(original);

      assert.deepEqual(cloned, original, 'Копия массива должна быть равна оригиналу');
    });

    QUnit.test('Работает правильно для объекта без прототипа', (assert) => {
      const original = Object.create(null);

      original.name = "name";
      original.age = 20;

      const cloned = deepClone(original);

      assert.deepEqual(cloned, original, 'Копии должны быть одинаковы');
      assert.strictEqual(Object.getPrototypeOf(cloned), null, 'Клон тоже не должен иметь прототипа');
    });
});
