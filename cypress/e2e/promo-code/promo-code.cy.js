describe('promo-code', () => {
    beforeEach(() => {
        cy.visit('/promo-code')
    })

    it('display the right number of cart items with the correct default values', () => {
        // test number of displayed cards
        cy.get('[data-test-id^="cardShipItem-"]').should('have.length', 3);

        // test default displayed value of cart counters
        cy.get('[data-test-id="cardShipItemQuantityCounter-0"]').should('have.text', 2);

        cy.get('[data-test-id="cardShipItemPrice-0"]').should('have.text', '$14.25');
    })
})
