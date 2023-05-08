import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

interface PromoCodeGetApi {
    isValid: boolean;
    value?: any;
    result?: number
}

export async function promoCodeGetApi(query: any, body: object, mockedValue: MockedValue): Promise<unknown> {
    const timeout: number = 2000;

    return new Promise((resolve) => {
        setTimeout(() => {
            const {code, totalWithoutPromo}: {code: string; totalWithoutPromo: number} = query;
            let promoCode: PromoCode | undefined | PromoCode[] = code ? mockedValue.promoCodes.find(c => c.code === code) : mockedValue.promoCodes;
            let res: PromoCodeGetApi = {isValid: false};
            if (promoCode && "value" in promoCode) {
                res = {
                    isValid: true,
                    value: promoCode.value,
                    result: totalWithoutPromo * (1 - promoCode.value.amount)
                };
            }
            resolve(res ?? null);
        }, timeout);
    });
}