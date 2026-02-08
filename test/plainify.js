'use strict';

QUnit.module('Тестируем функцию plainify', () => {
    QUnit.test('Работает правильно с вложенным объектом', (assert) => {
        const originalObject = {
            a: 1,
            b: {
                c: 2,
                d: {
                    e: 3
                }
            },
            f: 4
        };
        const result = plainify(originalObject);

        assert.deepEqual(result, { a: 1, 'b.c': 2, 'b.d.e': 3, f: 4 }, 'Объект должен быть преобразован в plain');
    });

    QUnit.test('Работает правильно с пустым объектом', (assert) => {
        const originalObject = {};
        const result = plainify(originalObject);

        assert.deepEqual(result, {}, 'Пустой объект должен возвращать пустой объект');
    });

    QUnit.test('Работает правильно с объектом, содержащим примитивы', (assert) => {
        const originalObject = {
            x: 'hello',
            y: 42,
            z: { a: 1, b: 2 }
        };
        const result = plainify(originalObject);

        assert.deepEqual(result, { x: 'hello', y: 42, 'z.a': 1, 'z.b': 2 }, 'Примитивы и вложенные объекты должны быть правильно преобразованы');
    });

    QUnit.test('Работает правильно с null и undefined', (assert) => {
        const originalObject = {
            a: null,
            b: {
                c: undefined,
                d: 0
            }
        };
        const result = plainify(originalObject);

        assert.deepEqual(result, { 'a': null, 'b.c': undefined, 'b.d': 0 }, 'null и undefined должны оставаться значениями');
    });

    QUnit.test('Работаем правильно с массивами', (assert) => {
        const originalObject = {
            tags: ['js', 'Go'],
            user: {
                hobbies: ['coding']
            }
        }
        const result = plainify(originalObject);

        assert.deepEqual(result, { 'tags': ['js', 'Go'], 'user.hobbies': ['coding'] }, 'Массивы должны сохраняться как массивы');
    })

    QUnit.test('Обработка пустых вложенных объектов', (assert) => {
        const originalObject = {
            a: 1,
            emptySubObject: {},
            b: {
                c: {}
            }
        };
        const result = plainify(originalObject);

        assert.deepEqual(result, { a: 1 }, 'Пустые вложенные объекты не должны создавать ключей');
    });

    QUnit.test('Работает правильно с falsy значениями', (assert) => {
        const originalObject = {
            zero: 0,
            emptyString: "",
            boolFalse: false,
            nested: {
                val: 0
            }
        };
        const result = plainify(originalObject);

        const expected = {
            'zero': 0,
            'emptyString': "",
            'boolFalse': false,
            'nested.val': 0
        };

        assert.deepEqual(result, expected, 'Falsy значения должны корректно переноситься в плоский объект');
    });
});

QUnit.module('Валидация входных данных', () => {
    QUnit.test('Должна выбрасывать ошибку, если передан null', (assert) => {
        assert.throws(
            () => plainify(null),
            /Переданный аргумент "obj" должен быть объектом Plain Object/,
            'Выбрасывает TypeError при передаче null'
        );
    });

    QUnit.test('Должна выбрасывать ошибку, если передан массив', (assert) => {
        assert.throws(
            () => plainify([1, 2, 3]),
            /Переданный аргумент "obj" должен быть объектом Plain Object/,
            'Выбрасывает TypeError при передаче массива'
        );
    });

    QUnit.test('Должна выбрасывать ошибку, если передано примитивное значение', (assert) => {
        const primitives = [42, "string", true, undefined];

        primitives.forEach(val => {
            assert.throws(
                () => plainify(val),
                /Переданный аргумент "obj" должен быть объектом Plain Object/,
                `Ошибка при передаче ${typeof val}`
            );
        });
    });
});
