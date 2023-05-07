import {OrderSummaryItemsMocked} from "./../../../src/pages/promo-code/promo-code.mock";
import {OrderSummaryItem} from "@/pages/promo-code";

describe('promo-code', () => {
    beforeEach(() => {
        localStorage.setItem('orderSummaryItems', JSON.stringify(OrderSummaryItemsMocked));
        cy.visit('/promo-code');
    })

    it('display the right number of cart items with the correct default values', () => {
        const orders: OrderSummaryItem[] =  JSON.parse(localStorage.getItem('orderSummaryItems'));
        // test number of displayed cards
        cy.get('[data-test-id^="cardShipItem-"]').should('have.length', orders.length);

        // test default values inside orders cards
        for (let i = 0; i < orders.length; i++) {
            cy.get(`[data-test-id="cardShipItemQuantityCounter-${i}"]`).should('have.text', orders[i].quantity);
            cy.get(`[data-test-id="cardShipItemPrice-${i}"]`).should('have.text', `$${orders[i].price.toFixed(2)}`);
        }

        // test default value displayed in order summary
    })
})
