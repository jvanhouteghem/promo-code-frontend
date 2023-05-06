import './card-order-summary.scss'

interface OrderSummaryItem {
    quantity: number
    label: string;
    price: number;
}

export function CardOrderSummaryPage(): JSX.Element {

    const OrderSummaryItems: OrderSummaryItem[] = [
        {
            quantity: 2,
            label: 'Acne Fighting Toner',
            price: 14.25
        },
        {
            quantity: 2,
            label: 'Radiance boosting Toner',
            price: 12.50
        },
        {
            quantity: 2,
            label: 'Hydrating Toner',
            price: 13.00
        }
    ]

    return (
        <>
            <div className="CardOrderSummmaryPage--container">

                <div className="ship-items-container">
                    <div className="ship-items">
                        <div className="title">Order Summary</div>
                            {OrderSummaryItems.map((orderSummaryItem: OrderSummaryItem, index: number) => (
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


            </div>
        </>
    )
}