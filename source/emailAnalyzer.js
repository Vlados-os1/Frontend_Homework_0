'use strict';

/**
 * Функция, анализирующая строку и возвращающая статистику по email адресам
 * @param {string} input - входная строка
 * 
 * @example
 * // returns { emailCount: 1, uniqueEmails: ["user@example.com"], mostFrequentEmail: "user@example.com" }
 * emailAnalyzer("Мой email: user@example.com.")
 * 
 * @returns {Object} - объект с результатами анализа
 * @property {number} emailCount - общее количество найденных адресов
 * @property {string[]} uniqueEmails - массив уникальных адресов
 * @property {string} mostFrequentEmail - наиболее часто встречающийся адрес
 */
function emailAnalyzer(input) {
    const emailRegex = /\b[a-z0-9._]+@(?:[a-z0-9]+\.)+[a-z]{2,}\b/gi;
    const emailsInput = (input.match(emailRegex) || []).map(email => email.toLowerCase());

    let emailFrequency = new Map();
    for (let email of emailsInput) {
        const count = emailFrequency.get(email);
        emailFrequency.set(email, (count ?? 0) + 1);
    }

    return {
        emailCount: Array.from(emailFrequency.values())
                         .reduce((sum, value) => sum + value, 0),
        uniqueEmails: Array.from(emailFrequency.keys()),
        mostFrequentEmail: Array.from(emailFrequency.entries())
                                .sort((a, b) => b[1] - a[1])?.[0]?.[0] || "",
    };
}