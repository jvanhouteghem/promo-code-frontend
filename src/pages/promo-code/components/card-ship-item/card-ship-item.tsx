import './card-ship-item.scss'
import {OrderSummaryItem} from "@/pages/promo-code";

export default function CardShipItemPage(
    {orderSummaryItem, changeQuantity, orderSummaryItemIndex, removeOrder}: {orderSummaryItem: OrderSummaryItem; changeQuantity: Function, orderSummaryItemIndex: number, removeOrder: Function}
): JSX.Element {
    return (
        <>
            <div data-test-id={`cardShipItem-${orderSummaryItemIndex}`} className="CardShipItemPage--container">
                <div className="CardShipItemPage--container-header">
                    <div className="title">Acne-Fighting Toner</div>
                    <div className="subtitle">Tener Category</div>
                </div>
                <div className="CardShipItemPage--container-content">
                    <div className="side-left"><img src="https://picsum.photos/500/500" /></div>
                    <div className="side-right">
                        <div className="text">
                            {orderSummaryItem.description}
                        </div>
                        <div className="tags">
                            <div className="tag">{orderSummaryItem.tags[0]}</div>
                        </div>
                        <div className="price-and-actions">
                            <div data-test-id={`cardShipItemPrice-${orderSummaryItemIndex}`} className="price">${orderSummaryItem.price.toFixed(2)}</div>
                            <div className="actions">
                                <div onClick={() => removeOrder(orderSummaryItemIndex)} className="action-icon">🗑️</div>
                                <button data-test-id={`cardShipItemQuantityDecrementButton-${orderSummaryItemIndex}`} onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity - 1)} className="action-counter-button">-</button>
                                <div data-test-id={`cardShipItemQuantityCounter-${orderSummaryItemIndex}`} className="action-counter">{orderSummaryItem.quantity}</div>
                                <button data-test-id={`cardShipItemQuantityIncrementButton-${orderSummaryItemIndex}`} onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity + 1)} className="action-counter-button">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}