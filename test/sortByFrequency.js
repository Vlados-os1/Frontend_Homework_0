'use strict';

QUnit.module("Тестируем функцию sortByFrequency", function() {
    QUnit.test("Работает правильно с сортировкой по частоте появления", function(assert) {
        const result = sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);

        assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Работает правильно с пустым массивом", function(assert) {
        const result = sortByFrequency([]);

        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с массивом с одним элементом", function(assert) {
        const result = sortByFrequency([5]);

        assert.deepEqual(result, [5], "Массив с одним элементом должен вернуть тот же элемент.");
    });

    QUnit.test("Работает правильно с одинаковыми частотами элементов", function(assert) {
        const result = sortByFrequency([3, 1, 4, 2, 5]);

        assert.deepEqual(result, [1, 2, 3, 4, 5],
        "При одинаковой частоте элементов должны быть отсортированы по возрастанию.");
});

    QUnit.test("Работает правильно с отрицательными числами", function(assert) {
        const result = sortByFrequency([-1, 0, 2, -1, 0, 2, 2, -3]);

        assert.deepEqual(result, [2, 2, 2, -1, -1, 0, 0, -3],
        "Отрицательные числа и ноль должны корректно сортироваться по частоте.");
});

});
