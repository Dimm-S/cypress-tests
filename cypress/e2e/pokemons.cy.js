describe('Покупка нового аватара для тренера на pokemonbattle.ru', function () {

    it('Покупка аватара ', () => {
        cy.visit('http://pokemonbattle.ru');
        cy.get('input[type=\'email\']').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('button').click();
        cy.get('.header__id-text_type_profile').contains('11299');
        cy.get('button[class*=\'id\']').click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.credit').type('2201382000000013');
        cy.get('.k_input_date').type('1225');
        cy.get('input[placeholder=\'000\']').type('125');
        cy.get('.k_input_name').type('CARDHOLDER NAME');
        cy.get('.pay-btn_desk').click();
        cy.get('.payment__cardnumber-defolt').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__fielheader-for-success').contains('Покупка прошла успешно');
    })
})