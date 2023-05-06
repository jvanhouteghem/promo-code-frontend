import './card-ship-item.scss'
import {OrderSummaryItem} from "@/pages/promo-code";

export function CardShipItemPage({orderSummaryItem, changeQuantity, orderSummaryItemIndex}: {orderSummaryItem: OrderSummaryItem; changeQuantity: Function, orderSummaryItemIndex: number}): JSX.Element {
    return (
        <>
            <div className="CardShipItemPage--container">
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
                            <div className="price">${orderSummaryItem.price.toFixed(2)}</div>
                            <div className="actions">
                                <div className="action-icon">🗑️</div>
                                <button onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity - 1)} className="action-counter-button">-</button>
                                <div className="action-counter">{orderSummaryItem.quantity}</div>
                                <button onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity + 1)} className="action-counter-button">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}