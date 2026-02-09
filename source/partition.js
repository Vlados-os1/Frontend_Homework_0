`use strict`;


/**
 * Функция разделяет элементы массива на два подмассива: один для элементов, которые удовлетворяют предикату,
 *  и другой для элементов, которые не удовлетворяют. 
 * @param {Array<any>} arr - Массив любых элементов
 * @param {(element: any) => boolean} predicate - Функция возвращающая логическое значение для каждого элемента
 * 
 * @example
 * // returns [[2, 4, 6], [1, 3, 5]]
 * partition([1, 2, 3, 4, 5, 6], num => num % 2 === 0)
 * 
 * @returns {[Array<any>, Array<any>]} - Возвращение массива, состоящего из 2 подмассивов:
 *  Первый массив содержит элементы, для которых значение предиката true
 *  Второй массив содержит элементы, для которых значение предиката false
 */
function partition(arr, predicate) {
    if (!Array.isArray(arr)) {
        return [[], []];
    }

    if (typeof predicate !== 'function') {
        return [[], []];
    }
    
    const result = [[], []];

    arr.forEach((element) => {
        result[predicate(element) ? 0 : 1].push(element);
    });

    return result;
}
