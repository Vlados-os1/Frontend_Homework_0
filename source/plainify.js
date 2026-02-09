/**
 * Рекурсивно преобразует вложенный объект в плоский объект, где составные ключи формируются через точку
 * 
 * @param {Object} obj - Исходный объект для преобразования
 * @returns {Object} Плоский объект с ключами-путями
 * 
 */
function plainify(obj) {
    /**
     * Внутренняя рекурсивная функция для обхода объекта.
     * 
     * @param {Object} currentObj - Текущий объект для обработки
     * @param {string} parentKey - Префикс для формирования составных ключей
     * @param {Object} result - Аккумулятор результатов
     * @returns {void}
     */
    function flatten(currentObj, parentKey, result) {
        Object.keys(currentObj).forEach(key => {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const value = currentObj[key];
            
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                flatten(value, newKey, result);
            } else {
                result[newKey] = value;
            }
        });
    }
    
    const result = {};
    flatten(obj, '', result);
    return result;
}
