import {promoCodeGetApi} from "@/pages/api/promo-code/routes/promo-code-get.api";
import {promoCodePostApi} from "@/pages/api/promo-code/routes/promo-code-post.api";
import {MockedValue, PROMO_CODES} from "@/pages/api/promo-code/promo-code.model";
import {promoCodePatchApi} from "@/pages/api/promo-code/routes/promo-code-patch.api";
import {promoCodeDeleteApi} from "@/pages/api/promo-code/routes/promo-code-delete.api";

// warning: mocked value
const mockedValue: MockedValue = {
    promoCodes: PROMO_CODES
}

const promoCodeApiMethods: any = {
    GET: async (query: any, body: any) => promoCodeGetApi(query, body, mockedValue),
    POST: async (query: any, body: any) => promoCodePostApi(query, body, mockedValue),
    PATCH: async (query: any, body: any) => promoCodePatchApi(query, body, mockedValue),
    DELETE: async (query: any, body: any) => promoCodeDeleteApi(query, body, mockedValue),
}

export default async function PromoCodeApi(req: any, res: any) {
    let result = await promoCodeApiMethods[req.method](req.query, req.body)
    res.json(result)
}