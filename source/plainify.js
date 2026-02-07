/**
 * Рекурсивно преобразует вложенный объект в plain объект, где ключи представляют собой пути к значениям через точку.
 * 
 * @param {Object} obj - исходный объект для преобразования
 * @param {string} [parentKey=''] - базовый ключ для текущего уровня рекурсии (используется внутренне)
 * @param {Object} [result={}] - аккумулятор для накопления результатов (используется внутренне)
 * @returns {Object} - плоский объект, где ключи представляют пути к значениям
 *
 */
function plainify(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                plainify(obj[key], newKey, result);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}   