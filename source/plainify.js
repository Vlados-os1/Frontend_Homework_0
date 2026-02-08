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
    Object.keys(obj).forEach(key => {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            plainify(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    });
    
    return result;
}