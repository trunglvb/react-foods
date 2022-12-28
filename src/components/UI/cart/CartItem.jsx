import React from "react";
import { ListGroupItem } from "reactstrap";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addItem, decreaseItem, deleteItem } from "../../../store/shopping-cart/cartSlice";


const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleDecreaseItem = (item) => {
        dispatch(decreaseItem(item));
    };
    return (
        <ListGroupItem className="border-0 cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={item.image01} alt="" />
                <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
                    <div className="cart__product">
                        <h6 className="cart__product-title">{item.title}</h6>
                        <p className="cart__product-price d-flex align-items-center gap-5">
                            {item.quantity}x <span>{item.totalPrice}$</span>
                        </p>
                        <div className="d-flex align-items-center justify-content-between btn-cart">
                            <span className="increase__btn" onClick={() => handleAddItem(item)}>
                                <i className="ri-add-line"></i>
                            </span>
                            <span className="quantity">{item.quantity}</span>
                            <span className="decrease__btn" onClick={() => handleDecreaseItem(item)}>
                                <i className="ri-subtract-line"></i>
                            </span>
                        </div>
                    </div>
                    <span className="btn-delete" onClick={() => dispatch(deleteItem(item))}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default CartItem;
