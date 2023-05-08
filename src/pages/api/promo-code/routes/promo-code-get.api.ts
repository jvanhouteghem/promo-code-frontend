import {MockedValue} from "@/pages/api/promo-code/promo-code.model";

interface PromoCodeGetApi {
    isValid: boolean;
    value?: any;
    result?: number
}

const Validators = {
    MULTIPLICATOR: (value: any, validator: any) => value >= validator.value
}

export async function promoCodeGetApi(query: any, body: object, mockedValue: MockedValue): Promise<unknown> {
    const {code, totalWithoutPromo}: {code: string; totalWithoutPromo: number} = query;
    const promoCode: any = code ? mockedValue.promoCodes.find(c => c.code === code) : mockedValue.promoCodes;
    let res: PromoCodeGetApi = {isValid: false};
    if (promoCode && promoCode.status === "OPEN" && "value" in promoCode) {
        if (promoCode.validators) {
            // TODO here loop with MAX_USED
            if (Validators.MULTIPLICATOR(totalWithoutPromo, promoCode.validators[0])) {
                res = {
                    isValid: true,
                    value: promoCode.value,
                    result: totalWithoutPromo * (1 - promoCode.value.amount)
                };
            }
        } else {
            res = {
                isValid: true,
                value: promoCode.value,
                result: totalWithoutPromo * (1 - promoCode.value.amount)
            };
        }
    }
    return res;
}