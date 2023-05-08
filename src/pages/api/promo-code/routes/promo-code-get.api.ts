import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodeGetApi(query: any, body: object, mockedValue: MockedValue): Promise<unknown> {
    const timeout: number = 2000;

    return new Promise((resolve) => {
        setTimeout(() => {
            const {code}: {code: string} = query;
            let res: PromoCode | PromoCode[] | undefined = code ? mockedValue.promoCodes.find(c => c.code === code) : mockedValue.promoCodes;
            resolve(res ?? null);
        }, timeout);
    });
}