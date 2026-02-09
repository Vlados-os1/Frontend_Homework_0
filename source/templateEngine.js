'use strict';

/**
 * Подставляет значения из объекта данных в строковый шаблон.
 *
 * @param {String} template - строка шаблона
 * @param {Object} data - объект с данными
 * @returns {String}
 */
const templateEngine = function (template, data){
    return template.replace(/{{\s*([^}]+)\s*}}/g, function (match, path){
        path = path.trim();
        const keys = path.split('.');

        const result = keys.reduce( (acc, key) => {
            if (acc == null){
                return undefined;
            }
            return acc[key];
        }, data);
        return result == null ? '' : String(result);
    });
};