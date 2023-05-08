import {PromoCodePo} from "./promo-code.po";

describe('promo-code default values', () => {
    beforeEach(() => {
        PromoCodePo.visit();
    })

    it('display the right number of cart items with the correct default values', () => {
        PromoCodePo.checkOrderItems(PromoCodePo.getOrders());
    })

    it('display the right summary result values', () => {
        PromoCodePo.checkSummary(PromoCodePo.getOrders(),'$54.00')
    })
})

describe('promo-code updating values', () => {
    beforeEach(() => {
        PromoCodePo.visit();
    })

    it('display the right number of cart items with the correct default values', () => {
        PromoCodePo.checkOrderItems(PromoCodePo.getOrders());
    })

    it('display the right summary result values', () => {
        PromoCodePo.checkSummary(PromoCodePo.getOrders(),'$54.00');
    })

    it('increment quantity of first item and check total x1', () => {
        cy.get(`[data-test-id="cardShipItemQuantityIncrementButton-${0}"]`).click();
        PromoCodePo.checkSummaryTotal(PromoCodePo.getOrders(),'$68.25')
    })

    it('increment quantity of first item and check total x3', () => {
        cy.get(`[data-test-id="cardShipItemQuantityIncrementButton-${0}"]`).click();
        cy.get(`[data-test-id="cardShipItemQuantityIncrementButton-${0}"]`).click();
        cy.get(`[data-test-id="cardShipItemQuantityIncrementButton-${0}"]`).click();

        PromoCodePo.checkSummaryTotal(PromoCodePo.getOrders(),'$96.75')
    })
})