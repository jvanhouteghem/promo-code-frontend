import {OrderSummaryItem} from "@/shared/schematics/cart/cart.hook";

export const OrderSummaryItemsMocked: OrderSummaryItem[] = [
    {
        imgSrc: 'https://fastly.picsum.photos/id/365/500/500.jpg?hmac=BNC6PNKT44Ss5yNhNtiByMW1Mz4uM2V-ilk9FyBg9g0',
        quantity: 2,
        label: 'Acne Fighting Toner',
        subtitle: 'Tincidunt mauris',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros ac risus aliquet convallis. Ut ut nisl lectus. In sed egestas neque, et suscipit libero.',
        tags: ['Size:100ml'],
        price: 14.25
    },
    {
        imgSrc: 'https://fastly.picsum.photos/id/267/500/500.jpg?hmac=EgYYR4vOAKPZRt-U_7pSsFpAooNhOlfQLhQccveylPI',
        quantity: 1,
        label: 'Radiance boosting Toner',
        subtitle: 'Justo in nisl',
        description: 'Sed sed tincidunt mauris. Cras malesuada gravida ultricies. Quisque nec justo in nisl egestas volutpat condimentum non velit.',
        tags: ['Size:100ml'],
        price: 12.50
    },
    {
        imgSrc: 'https://fastly.picsum.photos/id/669/500/500.jpg?hmac=Ai7DgV9Wwb9N65n5gwXVTXvZBiME_K96rlZGIhX5T50',
        quantity: 1,
        label: 'Hydrating Toner',
        subtitle: 'Egestas volutpat',
        description: 'Lorem ipsum dolor sit amet.',
        tags: ['Size:100ml'],
        price: 13.00
    }
];