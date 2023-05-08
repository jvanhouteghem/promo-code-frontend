import {OrderSummaryItem} from "@/pages/promo-code";
import {Box, CircularProgress, TextField} from "@mui/material";
import {usePromoCodeInput} from "@/pages/promo-code/components/card-order-summary/components/promo-code-input.hook";

export function PromoCode({orderSummaryItems}: {orderSummaryItems: OrderSummaryItem[]}): JSX.Element {
    const {
        promoCode,
        isCheckingPromoCode ,
        promoCodeValidatorAttributes,
        handleChange
    } = usePromoCodeInput(orderSummaryItems);

    return <>
        <Box sx={{ position: 'relative' }}>
            <TextField
                id="outlined-error-helper-text"
                disabled={isCheckingPromoCode}
                value={promoCode}
                onChange={event => handleChange(event)}
                style={{width: '100%'}}
                {...promoCodeValidatorAttributes}
            />
            {isCheckingPromoCode && <CircularProgress
                size={30}
                sx={{
                    position: 'absolute',
                    marginTop: '13px',
                    marginLeft: '-125px',
                }}
            />}
        </Box>
    </>
}