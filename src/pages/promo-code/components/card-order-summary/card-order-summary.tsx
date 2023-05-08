import './card-order-summary.scss'
import {OrderSummaryItem} from "@/pages/promo-code";
import {Button} from "@mui/material";
import {PromoCode} from "@/pages/promo-code/components/card-order-summary/components/promo-code-input";
import {usePromoCodeInput} from "@/pages/promo-code/components/card-order-summary/components/promo-code-input.hook";

export default function CardOrderSummaryPage({orderSummaryItems, resetOrders}: {orderSummaryItems: OrderSummaryItem[]; resetOrders: any}): JSX.Element {
    const {promoCodeFetched, isCheckingPromoCode ,} = usePromoCodeInput(orderSummaryItems);

    function sum(orderSummaryItems: OrderSummaryItem[]): number {
        const sumWithoutPromoo = orderSummaryItems?.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0) ?? 0;
        return promoCodeFetched.result ? promoCodeFetched.result : sumWithoutPromoo;
    }

    function handleSubmit(event: any) { // React.FormEvent
        event.preventDefault()
        console.log('handleSubmit', event)
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
                                    <div data-test-id={`cardOrderSummaryShipItemPrice-${index}`} className="price">${orderSummaryItem.price.toFixed(2)}</div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="promo-code-input-container">
                    <PromoCode orderSummaryItems={orderSummaryItems} />
               </div>

                <div className="sum-total">
                    <div className="label">Order Total</div>
                    <div data-test-id={"cardOrderSummaryTotal"} className="price">${sum(orderSummaryItems).toFixed(2)}</div>
                </div>

                <div>
                    <Button disabled={isCheckingPromoCode} style={{width: '100%', margin: '10px 0'}} variant="contained">Submit</Button>
                    <Button onClick={resetOrders} type="button" disabled={isCheckingPromoCode} style={{width: '100%', margin: '10px 0'}} variant="outlined">reset</Button>
                </div>


            </form>
        </>
    )
}