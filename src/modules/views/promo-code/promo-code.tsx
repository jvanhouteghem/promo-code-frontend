import './promo-code.scss'
import {DialogCongratz} from "@/modules/views/promo-code/components/dialog-congratz/dialog-congratz";
import {useCartSchematic} from "@/shared/schematics/cart/cart.hook";
import {useState} from "react";
import {CartSchematic} from "@/shared/schematics/cart/cart";

export default function PromoCodePage(): JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const cartSchematicHook = useCartSchematic();

    return (
        <>
            <div className="root-layout">
                <CartSchematic hook={cartSchematicHook} />
            </div>

            <DialogCongratz isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}></DialogCongratz>
        </>
    )
}