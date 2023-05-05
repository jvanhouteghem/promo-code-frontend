export interface MockedValue {
    promoCodes: PromoCode[]
}

export interface PromoCode {
    id: number;
    code: string; // must be uniq
    group: string; // each promo code are created by stack (group), example: WINTER_SALE
    value: any; // should contain a number value, or an object (ex {action: 'GRANT_GIFT', value: 'ebook-777'}} or a key etc.
    emittedDate: Date; // creation date
    fillDate: Date; // reconciliation date
    expiry?: Date; // expiration
    source: string; // a code could be used from different sources (ex darty, boulanger etc)
}

export const PROMO_CODES: PromoCode[] = [
    {
        id: 123456,
        code: 'code0',
        group: 'group0',
        value: 'value0',
        emittedDate: new Date(),
        fillDate: new Date(),
        source: 'source0'
    },
    {
        id: 123456,
        code: 'code1',
        group: 'group1',
        value: 'value1',
        emittedDate: new Date(),
        fillDate: new Date(),
        source: 'source1'
    }
]