export async function checkPromoCode(promoCode: string, totalWithoutPromo: number) {
    const timeout: number = 2000;

    return new Promise((resolve) => {
        setTimeout(async () => {
            let res = await fetch(`${window.location.origin}/api/promo-code?code=${promoCode}&totalWithoutPromo=${totalWithoutPromo}`);
            resolve(await res.json() ?? null);
        }, timeout);
    });
}