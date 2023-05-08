export interface MockedValue {
    promoCodes: PromoCode[]
}

export enum PromoStatus {
    OPEN = 'OPEN',
    FILLED = 'FILLED',
    CANCELLED = 'CANCELLED'
}

export interface PromoCode {
    id: number;
    code: string; // must be uniq
    counter: number; // the number of time a promoCode could be applied
    group: string; // each promo code are created by stack (group), example: WINTER_SALE
    value: any; // should contain a number value, or an object (ex {action: 'GRANT_GIFT', value: 'ebook-777'}} or a key etc.
    emittedDate: Date; // creation date
    fillDate: Date; // reconciliation date
    expiry?: Date; // expiration
    status: PromoStatus; // fillDate is not enough because you can cancel the promo code
}

/*export interface PromoCodeDetails {
    code: string; // must be uniq
    group: string; // each promo code are created by stack (group), example: WINTER_SALE
    source: string; // a code could be used from different sources (ex darty, boulanger etc)
}*/

export const PROMO_CODES: PromoCode[] = [
    {
        id: 123456,
        code: 'promo',
        counter: 10,
        group: 'group0',
        value: 'value0',
        emittedDate: new Date(),
        fillDate: new Date(),
        expiry: new Date(),
        status: PromoStatus.OPEN
    },
    {
        id: 789112,
        code: 'code1',
        counter: 10,
        group: 'group1',
        value: 'value1',
        emittedDate: new Date(),
        fillDate: new Date(),
        expiry: new Date(),
        status: PromoStatus.OPEN,
    }
]