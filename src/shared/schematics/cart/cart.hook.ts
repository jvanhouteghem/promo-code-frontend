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

export function usePromoCode({value, setValue}: {value: any[], setValue?: Function}): UsePromoCode {
    // const [value, setValue] = useLocalStorage('orderSummaryItems', null);
    const [orderSummaryItems, setOrderSummaryItems] = useState([] as OrderSummaryItem[]);

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

    return {
        orderSummaryItems,
        changeQuantity,
        resetOrders,
        removeOrder,
        isRemoveOrderEnabled
    }
}