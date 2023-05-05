import {MockedValue, PROMO_CODES} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodePostApi(query: any, body?: object, mockedValue?: MockedValue): Promise<void> {
    if (mockedValue) {
        mockedValue.promoCodes.push(PROMO_CODES[0]);
    }
}