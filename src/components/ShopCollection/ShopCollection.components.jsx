import React from "react";
import "./ShopCollection.styles.css";

const ShopCollection = ({ id, title, items }) => {
    return (
        <div className="shop-collection">
            <h2>{title}</h2>
            <div className="preview">
                {
                    items.filter((item,index) => index < 4).map(item =>
                            <div key={item.id} className="shop-collection-item">
                                <div style={
                                    {
                                        backgroundImage: `url(${item.imageUrl})`
                                    }
                                } className="shop-image" />
                                <div className="shop-description">
                                    <span className="name">{item.name}</span>
                                    <span className="price">{item.price}</span>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}
export default ShopCollection;