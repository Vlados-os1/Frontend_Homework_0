'use strict';

QUnit.module("Тестируем функцию emailAnalyzer", function() {
    QUnit.test("Работает правильно со строкой с одним email", function(assert) {
        const input = "Мой email: user@example.com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 1,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
        });
    });

    QUnit.test("Работает правильно со строкой с разными регистрами email", function(assert) {
        const input = "Контакты: User@Example.com и user@example.com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 2,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
        });
    });

    QUnit.test("Работает правильно со строкой с некорректными email", function(assert) {
        const input = "Некорректные email: user@, @example.com, user@domain..com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 0,
            uniqueEmails: [],
            mostFrequentEmail: ""
        });
    });

    QUnit.test("Работает правильно с email содержащими домены более высокого уровня", function(assert) {
        const input = "Контакты: User@Example.com и user@example.com; А это совершенно другое:Alex@my.site.ru";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 3,
            uniqueEmails: ["user@example.com", "alex@my.site.ru"],
            mostFrequentEmail: "user@example.com"
        });
    });

    QUnit.test("Обработка строки с большим числом email", function(assert) {
        const input = `
            Контакты команды:
            alex.kra@company.com
            yura.johnson@corporate.org
            al.ex@startup.io(для двойного числа: al.ex@startup.io)
            Александр (alexander@russian.domain.ru)
            ALEX.BIG@GMAIL.COM и alex.big@gmail.com;
            test.user123@sub.domain.co.uk
            admin@localhost.localdomain:
            user.name.tag@fi.email.com
            user@123test.456company789.net
            контакт: info@example.com
            и еще: info2@example.com, support@example.com
        `;
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
                emailCount: 14,
                uniqueEmails: ["alex.kra@company.com", "yura.johnson@corporate.org", "al.ex@startup.io", 
                    "alexander@russian.domain.ru","alex.big@gmail.com", "test.user123@sub.domain.co.uk", 
                    "admin@localhost.localdomain", "user.name.tag@fi.email.com", "user@123test.456company789.net", 
                    "info@example.com", "info2@example.com", "support@example.com"
                ],
                mostFrequentEmail: "al.ex@startup.io"
        });
    });

    QUnit.test("Работает правильно с повторяющимся и в разных регистрах", function(assert) {
        const input = `
        Алексей пишет: ALEX@COMPANY.COM
        Затем: alex@company.com
        И еще раз: Alex@Company.Com
        Также: alEx@CoMpAnY.cOm
        Маша: MARIA@TEST.ORG
        `;
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 5,
            uniqueEmails: ["alex@company.com", "maria@test.org"],
            mostFrequentEmail: "alex@company.com"
        });
    });
});


