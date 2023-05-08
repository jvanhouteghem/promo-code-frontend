import './promo-code.scss'
import {useEffect, useState} from "react";
import {useLocalStorage} from "@/shared/hooks/local-storage.hook";
import {OrderSummaryItemsMocked} from "../../../cypress/e2e/promo-code/promo-code.mock";
import CardShipItemPage from "@/pages/promo-code/components/card-ship-item/card-ship-item";
import CardOrderSummaryPage from "@/pages/promo-code/components/card-order-summary/card-order-summary";

export interface OrderSummaryItem {
    imgSrc: `http${string}`;
    quantity: number
    label: string;
    description: string;
    tags: string[],
    price: number;
}

export default function PromoCodePage(): JSX.Element {
    const [value, setValue] = useLocalStorage('orderSummaryItems', null);
    let [orderSummaryItems, setOrderSummaryItems] = useState([] as OrderSummaryItem[]);

    useEffect(() => {
        // setValue(OrderSummaryItemsMocked)
        setOrderSummaryItems(value ?? []); // setOrderSummaryItems(value ?? OrderSummaryItemsMocked)
    }, [value, orderSummaryItems]);

    const changeQuantity = (index: number, newQuantity: number) => {
        const newItems: OrderSummaryItem[] = [...orderSummaryItems];
        if (newItems.length > 0 && newQuantity > 0) {
            newItems[index].quantity = newQuantity;
            setOrderSummaryItems(newItems);
        }
    };

    const removeOrder = (index: number) => {
        setOrderSummaryItems((
            orderSummaryItems: OrderSummaryItem[]) => orderSummaryItems.filter((orderSummaryItem, orderSummaryItemIndex) => orderSummaryItemIndex !== index)
        );
    }

    return (
        <>
             <div className="PromoCodePage--container">
                 <div className="PromoCodePage--card-ship-items">
                         {orderSummaryItems.map((orderSummaryItem: OrderSummaryItem, orderSummaryItemIndex: number) =>
                             <div key={orderSummaryItemIndex} className="item">
                                 <CardShipItemPage orderSummaryItemIndex={orderSummaryItemIndex} orderSummaryItem={orderSummaryItem} changeQuantity={changeQuantity} removeOrder={removeOrder}/>
                             </div>
                         )}
                 </div>
                 <div className="PromoCodePage--order-summary">
                     <CardOrderSummaryPage orderSummaryItems={orderSummaryItems}/>
                 </div>
             </div>

        </>
    )
}