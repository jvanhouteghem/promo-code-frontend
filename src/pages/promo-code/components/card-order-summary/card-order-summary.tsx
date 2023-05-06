import './card-order-summary.scss'
import {OrderSummaryItem} from "@/pages/promo-code";
import {useEffect, useState} from "react";
import {Box, CircularProgress, TextField} from "@mui/material";

export function CardOrderSummaryPage({orderSummaryItems}): JSX.Element {
    function sum(OrderSummaryItems: OrderSummaryItem[]): number {
        const sumWithoutPromo = OrderSummaryItems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0);
        const isPromo = promoCodeValidatorAttributes?.error === false ? 0.9 : 1;
        return sumWithoutPromo * isPromo
    }

    function handleChange(event) {
        setPromoCode(event.target.value);
    }

    const [promoCode, setPromoCode] = useState('')
    const [promoCodeValidatorAttributes, setPromoCodeValidatorAttributes] = useState({
        label:"Add promo code here.",
    })

    const [îsDebounce, setIsDebounce] = useState(false);
    useEffect(() => {
        if (promoCode) {
            const handler = setTimeout(() => {
                setIsDebounce(true);

                setTimeout(() => {
                    setIsDebounce(false);
                    if (promoCode === 'promo') {
                        setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: false, helperText: null, color: "success", focused: true})
                    } else {
                        setPromoCodeValidatorAttributes({...promoCodeValidatorAttributes, error: true, helperText:"Please add a valid promo code.", color: null, focused: null})
                    }
                }, 1500)

            }, 500);

            return () => {
                clearTimeout(handler);
            };
        }
    }, [promoCode]);

    function handleSubmit(event) {
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
                            {orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, index: number) => (
                                <div key={index} className="ship-item">
                                    <div className="quantity-and-label">
                                        <div className="quantity">x{orderSummaryItem.quantity}</div>
                                        <div className="label">{orderSummaryItem.label}</div>
                                    </div>
                                    <div className="price">${orderSummaryItem.price.toFixed(2)}</div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="promo-code-input-container">
                        <Box sx={{ m: 1, position: 'relative' }}>
                        <TextField
                            id="outlined-error-helper-text"
                            value={promoCode}
                            onChange={event => handleChange(event)}
                            {...promoCodeValidatorAttributes}
                        />
                        {/*{promoCodeValidatorAttributes?.error === false && <div>✅</div>}*/}
                        {îsDebounce && <CircularProgress
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
                    <div className="price">${sum(orderSummaryItems).toFixed(2)}</div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>


            </form>
        </>
    )
}