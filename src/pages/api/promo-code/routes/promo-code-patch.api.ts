import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodePatchApi(query: any, body?: object, mockedValue?: MockedValue): Promise<PromoCode | undefined> {
    if (mockedValue) {
        mockedValue.promoCodes[0].expiry = new Date();
        return mockedValue.promoCodes[0];
    }
    return
}