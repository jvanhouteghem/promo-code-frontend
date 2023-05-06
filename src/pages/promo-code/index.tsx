import './promo-code.scss'
import {CardShipItemPage} from "@/pages/promo-code/components/card-ship-item/card-ship-item";
import {CardOrderSummaryPage} from "@/pages/promo-code/components/card-order-summary/card-order-summary";

export default function PromoCodePage(): JSX.Element {
    return (
        <>
             <div className="PromoCodePage--container">
                 <div className="PromoCodePage--card-ship-items">
                     <CardShipItemPage/>
                     <CardShipItemPage/>
                 </div>
                 <div className="PromoCodePage--order-summary">
                     <CardOrderSummaryPage />
                 </div>
             </div>

        </>
    )
}