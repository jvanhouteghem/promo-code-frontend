const promoCodeApiMethods: any = {
    GET: async (query: any, body: any) => (console.log('PromoCodeApi - GET', query, body)),
    POST: async (query: any, body: any) => (console.log('PromoCodeApi - POST', query, body)),
    PATCH: async (query: any, body: any) => (console.log('PromoCodeApi - PATCH', query, body)),
    DELETE: async (query: any, body: any) => (console.log('PromoCodeApi - DELETE', query, body)),
}

export default async function PromoCodeApi(req: any, res: any) {
    let result = await promoCodeApiMethods[req.method](req.query, req.body)
    res.json(result)
}