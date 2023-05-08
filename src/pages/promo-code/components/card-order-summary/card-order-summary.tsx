import './card-order-summary.scss'
import {OrderSummaryItem} from "@/pages/promo-code";
import {useEffect, useState} from "react";
import {Box, CircularProgress, TextField} from "@mui/material";
import {checkPromoCode} from "@/pages/api/promo-code/services/promo-code.service";

export default function CardOrderSummaryPage({orderSummaryItems}: {orderSummaryItems: OrderSummaryItem[]}): JSX.Element {
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeFetched, setPromoCodeFetched] = useState<{ isValid?: boolean; result?: number; value?: any }>({});
    const [promoCodeValidatorAttributes, setPromoCodeValidatorAttributes] = useState<any>({
        label:"Add promo code here.",
        error: null,
        helperText: null,
        color: null,
        focused: null
    });

    const sumWithoutPromo = orderSummaryItems?.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0) ?? 0;

    const [isCheckingPromoCode, setIsCheckingPromoCode] = useState(false);
    useEffect(() => {
        if (promoCode) {
            const handler = setTimeout(() => {
                setIsCheckingPromoCode(true);
                checkPromoCode(promoCode, sumWithoutPromo).then(data => {
                    setIsCheckingPromoCode(false);
                    setPromoCodeFetched(data);
                    console.log('promoCodeFetched', data)
                    if (!promoCode) {
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
            setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: null, helperText: null, color: null, focused: null});
        }
    }, [promoCode]);

    function sum(orderSummaryItems: OrderSummaryItem[]): number {
        // console.log('promoCodeFetched', promoCodeFetched)
        // const isPromo = promoCodeValidatorAttributes?.error === false && promoCodeFetched.value.type === 'MULTIPLICATOR' ? promoCodeFetched.value.amount : 1;
        return promoCodeFetched.result ? promoCodeFetched.result : sumWithoutPromo; // ? sumWithoutPromo * (1 - isPromo) : sumWithoutPromo;
    }

    function handleChange(event: any) { // ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        setPromoCode(event.target.value);
    }

    function handleSubmit(event: any) { // React.FormEvent
        event.preventDefault()
        console.log('handleSubmit', event)
        alert('handleSubmit')
    }

    return (
        <>
            <form className="CardOrderSummmaryPage--container" onSubmit={event => handleSubmit(event)}>

                <div className="ship-items-container">
                    <div className="ship-items">
                        <div className="title">Order Summary</div>
                            {orderSummaryItems?.map((orderSummaryItem: OrderSummaryItem, index: number) => (
                                <div key={index} className="ship-item">
                                    <div data-test-id={`cardOrderSummaryShipItemLabelAndQty-${index}`} className="quantity-and-label">
                                        <div className="quantity">x{orderSummaryItem.quantity}</div>
                                        <div className="label">{orderSummaryItem.label}</div>
                                    </div>
                                    <div data-test-id={`cardOrderSummaryShipItemPrice-${index}`}className="price">${orderSummaryItem.price.toFixed(2)}</div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="promo-code-input-container">
                        <Box sx={{ m: 1, position: 'relative' }}>
                        <TextField
                            id="outlined-error-helper-text"
                            disabled={isCheckingPromoCode}
                            value={promoCode}
                            onChange={event => handleChange(event)}
                            {...promoCodeValidatorAttributes}
                        />
                        {/*{promoCodeValidatorAttributes?.error === false && <div>✅</div>}*/}
                        {isCheckingPromoCode && <CircularProgress
                            size={30}
                            sx={{
                                position: 'absolute',
                                marginTop: '13px',
                                marginLeft: '-125px',
                            }}
                        />}
                    </Box>
               </div>

                <div className="sum-total">
                    <div className="label">Order Total</div>
                    <div data-test-id={"cardOrderSummaryTotal"} className="price">${sum(orderSummaryItems).toFixed(2)}</div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>


            </form>
        </>
    )
}