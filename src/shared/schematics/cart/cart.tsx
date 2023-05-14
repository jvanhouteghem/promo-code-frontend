import {OrderSummaryItem, useCartSchematic, UsePromoCode} from "@/shared/schematics/cart/cart.hook";
import {Card} from "@mui/material";
import ShipItemPage from "@/modules/views/promo-code/components/card-ship-item/card-ship-item";
import OrderSummaryPage from "@/modules/views/promo-code/components/card-order-summary/card-order-summary";
import './cart.scss'

export function CartSchematic({hook: cartSchematicHook}: {cartSchematicHook?: UsePromoCode}): JSX.Element {
    if (!cartSchematicHook) {
        cartSchematicHook = useCartSchematic();
    }

    return <div className="PromoCodePage--container">
        <div className="PromoCodePage--card-ship-items">
            {cartSchematicHook.orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                <Card key={orderSummaryItemIndex} className="item">
                    <ShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={cartSchematicHook.changeQuantity} removeOrder={cartSchematicHook.removeOrder} isRemoveOrderEnabled={cartSchematicHook.isRemoveOrderEnabled}/>
                </Card>
            )}
        </div>
        <Card className="PromoCodePage--order-summary">
            <OrderSummaryPage orderSummaryItems={cartSchematicHook.orderSummaryItems} resetOrders={cartSchematicHook.resetOrders}/>
        </Card>
    </div>
}