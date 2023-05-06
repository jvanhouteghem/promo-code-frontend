import './promo-code.scss'

export default function PromoCodePage(): JSX.Element {
    return (
        <>
            <div className="PromoCodePage--container">
                <div className="PromoCodePage--container-header">
                    <div className="title">Acne-Fighting Toner</div>
                    <div className="subtitle">Tener Category</div>
                </div>
                <div className="PromoCodePage--container-content">
                    <div className="side-left"><img src="https://picsum.photos/500/500" /></div>
                    <div className="side-right">
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros ac risus aliquet convallis. Ut ut nisl lectus. In sed egestas neque, et suscipit libero.
                        </div>
                        <div className="tags">
                            <div className="tag">Size: 100ml</div>
                        </div>
                        <div className="price-and-actions">
                            <div className="price">$14.25</div>
                            <div className="actions">
                                <div className="action-icon">🗑️</div>
                                <div className="action-counter-button">-</div>
                                <div className="action-counter">2</div>
                                <div className="action-counter-button">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}