import {useEffect, useState} from "react";
import {checkPromoCode} from "@/pages/api/promo-code/services/promo-code.service";

export function usePromoCodeInput(orderSummaryItems) {
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeFetched, setPromoCodeFetched] = useState<{ isValid?: boolean; result?: number; value?: any }>({});
    const [promoCodeValidatorAttributes, setPromoCodeValidatorAttributes] = useState<any>({
        label:"Add promo code here.",
        error: null,
        helperText: null,
        color: null,
        focused: null
    });

    function handleChange(event: any) { // ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        setPromoCode(event.target.value);
    }

    const [isCheckingPromoCode, setIsCheckingPromoCode] = useState(false);
    useEffect(() => {
        if (promoCode) {
            const handler = setTimeout(() => {
                setIsCheckingPromoCode(true);
                const sumWithoutPromo = orderSummaryItems?.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0) ?? 0;
                checkPromoCode(promoCode, sumWithoutPromo).then((data: any) => {
                    setIsCheckingPromoCode(false);
                    setPromoCodeFetched(data);
                    console.log('promoCodeFetched', data)
                    if (!promoCode) {
                        setPromoCodeFetched({});
                        setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: null, helperText: null, color: null, focused: null});
                    } else if (data.isValid) {
                        setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: false, helperText: `A ${data.value.amount * 100}% discount has been applied!`, color: "success", focused: true});
                    } else {
                        setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: true, helperText:"Please add a valid promo code.", color: null, focused: null});
                    }
                });
            }, 850);

            return () => {
                clearTimeout(handler);
            };
        } else {
            setPromoCodeFetched({});
            setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: null, helperText: null, color: null, focused: null});
        }
    }, [promoCode, orderSummaryItems]);

    return {
        promoCodeFetched,
        promoCode,
        setPromoCode,
        isCheckingPromoCode ,
        promoCodeValidatorAttributes,
        handleChange
    }
}