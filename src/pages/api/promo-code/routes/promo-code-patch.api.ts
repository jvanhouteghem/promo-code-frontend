import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodePatchApi(query: any, body?: object, mockedValue?: MockedValue): Promise<PromoCode | undefined> {
    let res: PromoCode;
    if (mockedValue) {
        mockedValue.promoCodes[0].expiry = new Date()
        res = mockedValue.promoCodes[0]
    }
    return res
}