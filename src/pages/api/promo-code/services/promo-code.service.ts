export async function checkPromoCode(promoCode: string) {
    let res = await fetch(`http://localhost:3000/api/promo-code?code=${promoCode}`);
    return await res.json();
}