import './promo-code.scss'
import {Card} from "@mui/material";
import ShipItemPage from "@/modules/views/promo-code/components/card-ship-item/card-ship-item";
import OrderSummaryPage from "@/modules/views/promo-code/components/card-order-summary/card-order-summary";
import {DialogCongratz} from "@/modules/views/promo-code/components/dialog-congratz/dialog-congratz";
import {OrderSummaryItem, usePromoCode} from "@/modules/views/promo-code/promo-code.hook";
import {useState} from "react";

export default function PromoCodePage(): JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(true);

    const {
        orderSummaryItems,
        changeQuantity, resetOrders, removeOrder, isRemoveOrderEnabled
    } = usePromoCode();

    return (
        <>
            <div className="root-layout">
                <div className="PromoCodePage--container">
                    <div className="PromoCodePage--card-ship-items">
                        {orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                            <Card key={orderSummaryItemIndex} className="item">
                                <ShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={changeQuantity} removeOrder={removeOrder} isRemoveOrderEnabled={isRemoveOrderEnabled}/>
                            </Card>
                        )}
                    </div>
                        <Card className="PromoCodePage--order-summary">
                            <OrderSummaryPage orderSummaryItems={orderSummaryItems} resetOrders={resetOrders}/>
                        </Card>
                </div>
            </div>


            <DialogCongratz isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}></DialogCongratz>
        </>
    )
}