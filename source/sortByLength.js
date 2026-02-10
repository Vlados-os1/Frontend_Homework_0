'use strict';

/**
 * Функция, сортирующая массив строк по их длине, при одинаковой длине также по алфавиту
 * @param {Array<String>} strings - массив строк
 * 
 * @example
 * // returns ["a", "bb", "ccc"]
 * sortByLength(["bb", "a", "ccc"]);
 * 
 * @returns {Array<String>}
 */
const sortByLength = (strings = []) => {
    if (!Array.isArray(strings))
        throw new TypeError('Аргумент должен быть массивом.');
    const copyArr = strings.map((item, index) => {
        if (item == null) {
            return item === null ? 'null' : 'undefined';
        }
        return String(item).replace(/[АA]/g, 'A')
        .replace(/[ВB]/g, 'B')
        .replace(/[СC]/g, 'C')
        .replace(/[ЕE]/g, 'E')
        .replace(/[НH]/g, 'H')
        .replace(/[КK]/g, 'K')
        .replace(/[МM]/g, 'M')
        .replace(/[ОO]/g, 'O')
        .replace(/[РP]/g, 'P')
        .replace(/[ТT]/g, 'T')
        .replace(/[ХX]/g, 'X')
        .replace(/[аa]/g, 'a')
        .replace(/[вb]/g, 'b')
        .replace(/[сc]/g, 'c')
        .replace(/[еe]/g, 'e')
        .replace(/[кк]/g, 'k')
        .replace(/[оo]/g, 'o')
        .replace(/[рp]/g, 'p')
        .replace(/[хx]/g, 'x');
    });

    return copyArr.sort((a, b) => a.length - b.length || a.localeCompare(b, 'en-US'));
};