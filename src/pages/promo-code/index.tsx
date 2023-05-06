import './promo-code.scss'
import {CardShipItemPage} from "@/pages/promo-code/components/card-ship-item/card-ship-item";
import {CardOrderSummaryPage} from "@/pages/promo-code/components/card-order-summary/card-order-summary";
import {useState} from "react";

export interface OrderSummaryItem {
    imgSrc: `http${string}`;
    quantity: number
    label: string;
    description: string;
    tags: string[],
    price: number;
}

export default function PromoCodePage(): JSX.Element {

    let orderSummaryItemsMocked: OrderSummaryItem[] = [
        {
            imgSrc: 'https://fastly.picsum.photos/id/365/500/500.jpg?hmac=BNC6PNKT44Ss5yNhNtiByMW1Mz4uM2V-ilk9FyBg9g0',
            quantity: 2,
            label: 'Acne Fighting Toner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros ac risus aliquet convallis. Ut ut nisl lectus. In sed egestas neque, et suscipit libero.',
            tags: ['Size: 100ml'],
            price: 14.25
        },
        {
            imgSrc: 'https://fastly.picsum.photos/id/267/500/500.jpg?hmac=EgYYR4vOAKPZRt-U_7pSsFpAooNhOlfQLhQccveylPI',
            quantity: 1,
            label: 'Radiance boosting Toner',
            description: 'Sed sed tincidunt mauris. Cras malesuada gravida ultricies. Quisque nec justo in nisl egestas volutpat condimentum non velit.',
            tags: ['Size: 100ml'],
            price: 12.50
        },
        {
            imgSrc: 'https://fastly.picsum.photos/id/669/500/500.jpg?hmac=Ai7DgV9Wwb9N65n5gwXVTXvZBiME_K96rlZGIhX5T50',
            quantity: 1,
            label: 'Hydrating Toner',
            description: 'Lorem ipsum dolor sit amet.',
            tags: ['Size: 100ml'],
            price: 13.00
        }
    ];
    let [orderSummaryItems, setOrderSummaryItems] = useState(orderSummaryItemsMocked)

    const changeQuantity = (index, newQuantity) => {
        const newItems = [...orderSummaryItems];
        if (newQuantity > 0) {
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