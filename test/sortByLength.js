'use strict';

QUnit.module("Тестируем функцию sortByLength", function() {
    QUnit.test("Правильно сортирует строки по длине", function(assert) {
        const result = sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);

        assert.deepEqual(result, ["fig", "kiwi", "apple", "grape", "banana"], "Строки должны быть отсортированы по длине.");
    });

    QUnit.test("Правильно сортирует строки с одинаковой длиной", function(assert) {
        const result = sortByLength(["cat", "bat", "ant", "dog"]);

        assert.deepEqual(result, ["ant", "bat", "cat", "dog"], "Строки с одинаковой длиной должны быть отсортированы в алфавитном порядке.");
    });

    QUnit.test("Правильно сортирует массив с одной строкой", function(assert) {
        const result = sortByLength(["hello"]);

        assert.deepEqual(result, ["hello"], "Массив с одной строкой должен вернуть ту же строку.");
    });

    QUnit.test("Правильно обрабатывает пустой массив", function(assert) {
        const result = sortByLength([]);

        assert.deepEqual(result, [], "Массив должен быть пустой");
    });

    QUnit.test("Правильно сортирует строки по длине и по алфавиру", function(assert) {
        const result = sortByLength(["cc", "abc", "a", "c", "b", "aaa"]);

        assert.deepEqual(result, ["a", "b", "c", "cc", "aaa", "abc"], 
            "Строки должны быть отсортированы по длине и по алфавиру.");
    });

    QUnit.test("Не изменяет исходный массив", function(assert) {
        let arr = ["b", "a"];
        const result = sortByLength(arr);

        assert.deepEqual(result, ["a", "b"], "Массив отсортирован");
        assert.deepEqual(arr, ["b", "a"], "Исходный массив не изменился");
    });
});
