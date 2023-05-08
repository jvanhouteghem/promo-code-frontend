export async function checkPromoCode(promoCode: string, totalWithoutPromo: number) {
    let res = await fetch(`http://localhost:3000/api/promo-code?code=${promoCode}&totalWithoutPromo=${totalWithoutPromo}`);
    return await res.json();
}