import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

const Carts = ({ cartActice, setCartActive }) => {
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);
    const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

    return (
        <>
            <div
                className={cartActice ? "overlay overlay__active" : "overlay"}
            ></div>
            <div
                className={
                    cartActice ? "cart__container active" : "cart__container"
                }
            >
                <ListGroup className="cart">
                    <div
                        className="cart__close"
                        onClick={() => setCartActive(false)}
                    >
                        <span>
                            <i className="ri-close-line"></i>
                        </span>
                    </div>
                    <div className="cart__item-list">
                        {cartProducts.length === 0 ? (
                            <h6 className="text-center mt-5">
                                No item added to the cart
                            </h6>
                        ) : (
                            cartProducts.map((item, index) => (
                                <CartItem key={index} item={item} />
                            ))
                        )}
                    </div>

                    <div className="cart__bottom d-flex align-items-center justify-content-between">
                        <h6>
                            Subtotal amount: <span>${totalAmount}</span>{" "}
                        </h6>
                        <button
                            className="btn-checkout"
                            onClick={() => setCartActive(false)}
                        >
                            <Link to="/checkout">Checkout</Link>
                        </button>
                    </div>
                </ListGroup>
            </div>
        </>
    );
};

export default Carts;
