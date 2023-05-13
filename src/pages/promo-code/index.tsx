import './promo-code.scss'
import {useEffect, useState} from "react";
import {useLocalStorage} from "@/shared/hooks/local-storage.hook";
import {OrderSummaryItemsMocked} from "../../../cypress/e2e/promo-code/promo-code.mock";
import ShipItemPage from "@/pages/promo-code/components/card-ship-item/card-ship-item";
import OrderSummaryPage from "@/pages/promo-code/components/card-order-summary/card-order-summary";
import {
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";

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
    const [orderSummaryItems, setOrderSummaryItems] = useState([] as OrderSummaryItem[]);
    const [isDialogOpen, setIsDialogOpen] = useState(true);

    const isRemoveOrderEnabled: boolean = orderSummaryItems?.length > 1;

    useEffect(() => {
        // setValue(OrderSummaryItemsMocked)
        setOrderSummaryItems(value ?? []);
    }, [value, orderSummaryItems]);

    useEffect(() => {
        if (!value || value?.length === 0) {
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

    const removeOrder = (index: number) => {
        const newOrders: OrderSummaryItem[] = orderSummaryItems.filter((orderSummaryItem, orderSummaryItemIndex) => orderSummaryItemIndex !== index);
        setValue(newOrders);
        setOrderSummaryItems(newOrders);
    }

    function resetOrders() {
        setValue(OrderSummaryItemsMocked);
    }

    return (
        <>
            <main>
                <section>
                    <article className="cart-articles">
                        {orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                            <Card key={orderSummaryItemIndex}>
                                <ShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={changeQuantity} removeOrder={removeOrder} isRemoveOrderEnabled={isRemoveOrderEnabled}/>
                            </Card>
                        )}
                    </article>
                    <aside>
                        <Card>
                            <OrderSummaryPage orderSummaryItems={orderSummaryItems} resetOrders={resetOrders}/>
                        </Card>
                    </aside>
                </section>
            </main>


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