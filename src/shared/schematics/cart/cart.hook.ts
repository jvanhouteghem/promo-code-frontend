import {useLocalStorage} from "@/shared/hooks/local-storage.hook";
import {useEffect, useState} from "react";
import {OrderSummaryItemsMocked} from "../../../../cypress/e2e/promo-code/promo-code.mock";

export interface OrderSummaryItem {
    imgSrc: `http${string}`;
    quantity: number
    label: string;
    subtitle: string;
    description: string;
    tags: string[],
    price: number;
}

export interface UsePromoCode {
    orderSummaryItems: OrderSummaryItem[];
    changeQuantity: Function;
    removeOrder: Function;
    isRemoveOrderEnabled: boolean;
    resetOrders: Function
}

export const CART_SCHEMATIC_LOCALSTORAGE_KEY = 'orderSummaryItems';

export function useCartSchematic(): UsePromoCode {
    const [value, setValue] = useLocalStorage(CART_SCHEMATIC_LOCALSTORAGE_KEY, null);
    const [orderSummaryItems, setOrderSummaryItems] = useState([] as OrderSummaryItem[]);

    const isRemoveOrderEnabled: boolean = orderSummaryItems?.length > 1;

    useEffect(() => {
        // setValue(OrderSummaryItemsMocked)
        setOrderSummaryItems(value ?? []);
    }, [value, orderSummaryItems]);

    const changeQuantity = (index: number, newQuantity: number) => {
        const newItems: OrderSummaryItem[] = [...orderSummaryItems];
        if (newItems.length > 0 && newQuantity > 0) {
            newItems[index].quantity = newQuantity;
            setOrderSummaryItems(newItems);
        }
    };

    const removeOrder = (index: number) => {
        const newOrders: OrderSummaryItem[] = orderSummaryItems.filter((orderSummaryItem, orderSummaryItemIndex) => orderSummaryItemIndex !== index);
        setOrderSummaryItems(newOrders);

        if (setValue) {
            setValue(newOrders);
        }
    }

    function resetOrders() {
        setValue(OrderSummaryItemsMocked);
    }

    return {
        orderSummaryItems,
        changeQuantity,
        resetOrders,
        removeOrder,
        isRemoveOrderEnabled
    }
}