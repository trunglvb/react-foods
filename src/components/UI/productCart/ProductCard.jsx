import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/shopping-cart/cartSlice";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (element) => {
        dispatch(addItem(element));
    };

    return (
        <div className="product__item">
            <div className="product__img">
                <img src={item.image01} alt="" className="w-50" />
            </div>
            <div className="product__content">
                <div className="product__content-title">
                    <h5>
                        <Link to={`/foods/${item.id}`}>{item.title}</Link>
                    </h5>
                </div>
                <div className="product__content-desc d-flex align-items-center justify-content-between">
                    <span className="product__price">{item.price}</span>
                    <button
                        className="addToCart_btn"
                        onClick={() => handleAddToCart(item)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
