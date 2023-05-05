import {MockedValue, PromoCode} from "@/pages/api/promo-code/promo-code.model";

export async function promoCodeGetApi(query: any, body?: object, mockedValue?: MockedValue): Promise<PromoCode[]> {
    return mockedValue?.promoCodes ?? []
}