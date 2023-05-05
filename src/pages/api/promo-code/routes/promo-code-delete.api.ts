import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodeDeleteApi(query: any, body?: object, mockedValue?: MockedValue): Promise<PromoCode[]> {
    mockedValue?.promoCodes.pop();
    return mockedValue?.promoCodes ?? []
}