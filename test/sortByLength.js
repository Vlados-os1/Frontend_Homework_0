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

        assert.deepEqual(result, [], "Должна быть возвращена пустота.");
    });
    QUnit.test("Правильно обрабатывает две одинаковые строки.", function(assert) {
        const result = sortByLength(["Chicago", "Chicago"]);

        assert.deepEqual(result, ["Chicago", "Chicago"], "Должны быть возвращены две одинаковые строки.");
    });
    QUnit.test("Правильно обрабатывает буквы с повторениями.", function(assert) {
        const result = sortByLength(["d", "a", "b", "c", "d"]);

        assert.deepEqual(result, ["a", "b", "c", "d", "d"], "Должны быть возвращены буквы в алфавитном порядке.");
    });
    QUnit.test("Все примитивные типы вместе", function(assert) {
        const result = sortByLength([
            "string",
            123,     
            999n,     
            true,         
            false,        
            undefined,    
            null,
            Symbol(1),       
        ]);
        
        assert.deepEqual(result, ["123", "999", "null", "true", "false", "string", "Symbol(1)", "undefined"]);
    });
    QUnit.test("Правильно обрабатывает две одинаковые строки, но с буквами C на разных языках.", function(assert) {
        const result = sortByLength(["Сhicago", "Chicago"]);

        assert.deepEqual(result, ["Chicago", "Chicago"], "Не должно произойти ошибки.");
    });
});
