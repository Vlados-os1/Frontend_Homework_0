/**
 * Превращает вложенный объект в «плоский», соединяя ключи через точку.
 * @param {Object} obj - Исходный объект для преобразования.
 * @param {string} [prefix=''] - Текущий путь ключей
 *
 * @example
 * // returns { "a": 1, "b.c": 2, "b.d.e": 3 }
 * plainify({
 *      a: 1,
 *      b: {
 *          c: 2,
 *          d: {
 *              e: 3
 *          }
 *      }
 * });
 * @returns {Object} Объект с одноуровневой структурой.
 */
function plainify(obj, prefix = '') {
    let result = {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            const value = obj[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                const flatObject = plainify(value, newKey);
                Object.assign(result, flatObject);
            } else {
                result[newKey] = value;
            }
        }
    }

  return result;
}
