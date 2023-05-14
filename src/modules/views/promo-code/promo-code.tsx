import './promo-code.scss'
import {DialogCongratz} from "@/modules/views/promo-code/components/dialog-congratz/dialog-congratz";
import {usePromoCode} from "@/shared/schematics/cart/cart.hook";
import {useState} from "react";
import {CartSchematic} from "@/shared/schematics/cart/cart";
import {useLocalStorage} from "@/shared/hooks/local-storage.hook";

export default function PromoCodePage(): JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(true);

    const [value, setValue] = useLocalStorage('orderSummaryItems', null);
    const cartHook = usePromoCode({value, setValue});

    return (
        <>
            <div className="root-layout">
                <CartSchematic hook={cartHook} />
            </div>

            <DialogCongratz isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}></DialogCongratz>
        </>
    )
}