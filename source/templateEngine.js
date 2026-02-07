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
        let result = data;

        for (let i = 0; i < keys.length; i++){
            if (result === undefined || result === null){
                return '';
            }
            result = result[keys[i]];
        }

        return result !== undefined && result !== null ? String(result) : '';
    });
};