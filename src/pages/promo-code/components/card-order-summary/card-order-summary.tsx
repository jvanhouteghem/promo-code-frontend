import './card-order-summary.scss'
import {OrderSummaryItem} from "@/pages/promo-code";



export function CardOrderSummaryPage({orderSummaryItems}): JSX.Element {


    function sum(OrderSummaryItems: OrderSummaryItem[]) {
        return OrderSummaryItems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0);
    }

    return (
        <>
            <div className="CardOrderSummmaryPage--container">

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

                <div className="sum-total">
                    <div className="label">Order Total</div>
                    <div className="price">${sum(orderSummaryItems)}</div>
                </div>


            </div>
        </>
    )
}