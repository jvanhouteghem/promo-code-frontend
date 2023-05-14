import './card-ship-item.scss'
import {Button, Card, CardContent, Chip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {OrderSummaryItem} from "@/modules/views/promo-code/promo-code.hook";

export default function ShipItemPage(
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
            {orderSummaryItem && <div data-test-id={`cardShipItem-${orderSummaryItemIndex}`}  className="CardShipItemPage--container">
                    <div className="CardShipItemPage--container-header">
                        <div className="title">{orderSummaryItem.label}</div>
                        <div className="subtitle">{orderSummaryItem.subtitle}</div>
                    </div>
                    <div className="CardShipItemPage--container-content">
                        <div className="side-left"><img src={orderSummaryItem.imgSrc} /></div>
                        <div className="side-right">
                            <div className="text">
                                {orderSummaryItem.description}
                            </div>
                            <div className="tags">
                                {orderSummaryItem.tags.map((r, index) => <Chip key={index} label={orderSummaryItem.tags[index]} variant="outlined" />)}
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
            </div>}
        </>
    )
}