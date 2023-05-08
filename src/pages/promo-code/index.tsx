import './promo-code.scss'
import {useEffect, useState} from "react";
import {useLocalStorage} from "@/shared/hooks/local-storage.hook";
import {OrderSummaryItemsMocked} from "../../../cypress/e2e/promo-code/promo-code.mock";
import CardShipItemPage from "@/pages/promo-code/components/card-ship-item/card-ship-item";
import CardOrderSummaryPage from "@/pages/promo-code/components/card-order-summary/card-order-summary";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export interface OrderSummaryItem {
    imgSrc: `http${string}`;
    quantity: number
    label: string;
    subtitle: string;
    description: string;
    tags: string[],
    price: number;
}

export default function PromoCodePage(): JSX.Element {
    const [value, setValue] = useLocalStorage('orderSummaryItems', null);
    let [orderSummaryItems, setOrderSummaryItems] = useState([] as OrderSummaryItem[]);
    const [isDialogOpen, setIsDialogOpen] = useState(true)

    useEffect(() => {
        // setValue(OrderSummaryItemsMocked)
        setOrderSummaryItems(value ?? []);
    }, [value, orderSummaryItems]);

    useEffect(() => {
        if (value.length == 0) {
            resetOrders();
        }
    }, [])

    const changeQuantity = (index: number, newQuantity: number) => {
        const newItems: OrderSummaryItem[] = [...orderSummaryItems];
        if (newItems.length > 0 && newQuantity > 0) {
            newItems[index].quantity = newQuantity;
            setOrderSummaryItems(newItems);
        }
    };

    const isRemoveOrderEnabled: boolean = orderSummaryItems?.length > 1;

    const removeOrder = (index: number) => {
        console.log('orderSummaryItems', orderSummaryItems)
        let newOrders = orderSummaryItems.filter((orderSummaryItem, orderSummaryItemIndex) => orderSummaryItemIndex !== index);
        setValue(newOrders)
        setOrderSummaryItems(newOrders)
    }

    function resetOrders() {
        setValue(OrderSummaryItemsMocked)
    }

    return (
        <>
            {/*<img src="/bg.png" alt="my image" />  style={{backgroundImage: `url('./bg.png')`}}*/}
            <div className="root-layout">
                <div className="PromoCodePage--container">
                    <div className="PromoCodePage--card-ship-items">
                        {orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                            <div key={orderSummaryItemIndex} className="item">
                                <CardShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={changeQuantity} removeOrder={removeOrder} isRemoveOrderEnabled={isRemoveOrderEnabled}/>
                            </div>
                        )}
                    </div>
                    <div className="PromoCodePage--order-summary">
                        <CardOrderSummaryPage orderSummaryItems={orderSummaryItems} resetOrders={resetOrders}/>
                    </div>
                </div>
            </div>


            <Dialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Congrats!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hi ! Use <code>promo50</code> and get a 50% Welcome discount !
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button data-test-id="DialogCongratsWelcomePromo" onClick={() => setIsDialogOpen(false)} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}