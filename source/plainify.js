'use strict'
/**
 * Рекурсивно преобразует вложенный объект в плоский объект, где составные ключи формируются через точку
 * 
 * @param {Object} obj - Исходный объект для преобразования
 * @returns {Object} Плоский объект с ключами-путями
 * 
 */
function plainify(obj) {
    const result = {};
    /**
     * Внутренняя рекурсивная функция для обхода объекта
     * 
     * @param {Object} currentObj - Текущий объект для обработки
     * @param {string} parentKey - Префикс для формирования составных ключей
     * @returns {void}
     */
    function flatten(currentObj, parentKey) {
        Object.keys(currentObj).forEach(key => {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const value = currentObj[key];
            
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                flatten(value, newKey);
            } else {
                result[newKey] = value;
            }
        });
    }

    flatten(obj, '');
    return result;
}
