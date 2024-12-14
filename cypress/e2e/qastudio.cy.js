describe('Проверка авторизации qa.studio', function () {
    
    beforeEach('Открыть форму авторизации', function () {
        cy.visit('https://login.qa.studio');
    });

    afterEach('Проверка видимости кнопки закрытия', function () {
        cy.get('#exitMessageButton .exitIcon').should('be.visible');
    });

    it('Правильный логин, правильный пароль', () => {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    });

    it('Восстановление пароля', () => {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    });

    it('Правильный логин, неправильный пароль', () => {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Неравильный логин, правильный пароль', () => {
        cy.get('#mail').type('german@dolnikoff.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Негативный кейс валидации - отсутствие @', () => {
        cy.get('#mail').type('germandolnikoff.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    });

    it('Приведение к строчным буквам в логине', () => {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    });
})