import './card-ship-item.scss'
import {OrderSummaryItem} from "@/pages/promo-code";
import {Button, Chip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardShipItemPage(
    {orderSummaryItem, changeQuantity, orderSummaryItemIndex, removeOrder, isRemoveOrderEnabled}: {orderSummaryItem: OrderSummaryItem; changeQuantity: Function, orderSummaryItemIndex: number, removeOrder: Function, isRemoveOrderEnabled: boolean}
): JSX.Element {

    const counterButtonStyle = {
        width: '30px',
        height: '30px',
        minWidth: 'unset',
        border: '1px solid grey'
    }

    return (
        <>
            {orderSummaryItem && <div data-test-id={`cardShipItem-${orderSummaryItemIndex}`} className="CardShipItemPage--container">
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
                            {/*<div className="tag">{orderSummaryItem.tags[0]}</div>*/}
                            <Chip label={orderSummaryItem.tags[0]} variant="outlined" />
                        </div>
                        <div className="price-and-actions">
                            <div data-test-id={`cardShipItemPrice-${orderSummaryItemIndex}`} className="price">${orderSummaryItem.price.toFixed(2)}</div>
                            <div className="actions">
                                {isRemoveOrderEnabled &&
                                    <div onClick={() => isRemoveOrderEnabled && removeOrder(orderSummaryItemIndex)} className="action-icon">
                                        <DeleteIcon />
                                    </div>
                                }
                                <Button style={counterButtonStyle} variant="outlined" data-test-id={`cardShipItemQuantityDecrementButton-${orderSummaryItemIndex}`} onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity - 1)} className="action-counter-button">-</Button>
                                <div data-test-id={`cardShipItemQuantityCounter-${orderSummaryItemIndex}`} className="action-counter">{orderSummaryItem.quantity}</div>
                                <Button style={counterButtonStyle} variant="outlined" data-test-id={`cardShipItemQuantityIncrementButton-${orderSummaryItemIndex}`} onClick={() => changeQuantity(orderSummaryItemIndex, orderSummaryItem.quantity + 1)} className="action-counter-button">-</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    )
}