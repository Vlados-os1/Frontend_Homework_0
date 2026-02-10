'use strict';

/**
 * Функция, создающая новый массив, отсортированный по длине строк.
 * Если две строки имеют одинаковую длину, они должны быть отсортированы в алфавитном порядке.
 * @param {Array<String>} strings - массив строк 
 * 
 * @example
 * // returns ["a", "b", "c", "cc", "aaa", "abc"]
 * sortByLength(["cc", "abc", "a", "c", "b", "aaa"]);
 * 
 * @returns {Array<String>}
 */
const sortByLength = (strings) => {
    return strings.slice().sort((a, b) => a.length - b.length || a.localeCompare(b));
}
    
