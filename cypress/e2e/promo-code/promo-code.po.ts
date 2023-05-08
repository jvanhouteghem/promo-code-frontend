import {OrderSummaryItem} from "@/pages/promo-code";
import {OrderSummaryItemsMocked} from "./promo-code.mock";

export class PromoCodePo {

    static visit() {
        localStorage.setItem('orderSummaryItems', JSON.stringify(OrderSummaryItemsMocked));
        cy.visit('/promo-code');
    }

    static checkOrderItems(orders: OrderSummaryItem[]) {
        cy.get('[data-test-id^="cardShipItem-"]').should('have.length', orders.length);

        // test default values inside orders cards
        for (let i = 0; i < orders.length; i++) {
            cy.get(`[data-test-id="cardShipItemQuantityCounter-${i}"]`).should('have.text', orders[i].quantity);
            cy.get(`[data-test-id="cardShipItemPrice-${i}"]`).should('have.text', `$${orders[i].price.toFixed(2)}`);
        }
    }

    static checkSummary(orders: OrderSummaryItem[], expectedOrderTotal: string) {
        // check added items
        for (let i = 0; i < orders.length; i++) {
            cy.get(`[data-test-id="cardOrderSummaryShipItemLabelAndQty-${i}"]`).should('have.text', `x${orders[i].quantity}${orders[i].label}`);
            cy.get(`[data-test-id="cardOrderSummaryShipItemPrice-${i}"]`).should('have.text', `$${orders[i].price.toFixed(2)}`);
        }

        // check total order
        PromoCodePo.checkSummaryTotal(orders, expectedOrderTotal);
    }

    static checkSummaryTotal(orders: OrderSummaryItem[], expectedOrderTotal: string) {
        cy.get(`[data-test-id="cardOrderSummaryTotal"]`).should('have.text', expectedOrderTotal);
    }

    static getOrders(): OrderSummaryItem[] {
        const orders: string = localStorage.getItem('orderSummaryItems') ?? null;
        return orders ? JSON.parse(orders!) : [];
    }

}