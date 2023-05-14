import {OrderSummaryItem, UsePromoCode} from "@/shared/schematics/cart/cart.hook";
import {Card} from "@mui/material";
import ShipItemPage from "@/modules/views/promo-code/components/card-ship-item/card-ship-item";
import OrderSummaryPage from "@/modules/views/promo-code/components/card-order-summary/card-order-summary";

export function CartSchematic({hook}: {hook: UsePromoCode}): JSX.Element {

    return <div className="PromoCodePage--container">
        <div className="PromoCodePage--card-ship-items">
            {hook.orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                <Card key={orderSummaryItemIndex} className="item">
                    <ShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={hook.changeQuantity} removeOrder={hook.removeOrder} isRemoveOrderEnabled={hook.isRemoveOrderEnabled}/>
                </Card>
            )}
        </div>
        <Card className="PromoCodePage--order-summary">
            <OrderSummaryPage orderSummaryItems={hook.orderSummaryItems} resetOrders={hook.resetOrders}/>
        </Card>
    </div>
}