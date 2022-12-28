import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import avatar from "../../assets/images/avatar.jpg";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import Carts from "../UI/cart/Carts";
import { removeUserLogin } from "../../store/shopping-cart/loginSlice";

const nav_links = [
    {
        display: "Home",
        path: "/home",
    },
    {
        display: "Foods",
        path: "/foods",
    },
    {
        display: "Cart",
        path: "/cart",
    },
    {
        display: "Contact",
        path: "/contact",
    },
];
const Header = () => {
    const dispatch = useDispatch();

    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(
        (state) => state.cartReducer.totalQuantity
    );

    const userLogin = useSelector((state) => state.loginReducer.userLogin);

    const isLogin = useSelector((state) => state.loginReducer.isLogin);
    console.log(userLogin);

    const [cartActice, setCartActive] = useState(false);
    const handleCart = () => {
        setCartActive(!cartActice);
    };
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("header__shink");
            } else {
                headerRef.current.classList.remove("header__shink");
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <>
            <header className="header" ref={headerRef}>
                <Container>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <Link to="/home">
                                {" "}
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>

                        {/* ======== menu ==========*/}
                        <div
                            className="navigation"
                            ref={menuRef}
                            onClick={toggleMenu}
                        >
                            <div className="menu d-flex align-items-center gap-5">
                                {isLogin && (
                                    <div className="user__mobile flex justify-center flex-col items-center">
                                        <img
                                            src={avatar}
                                            className="w-[50px] h-[50px] rounded-[50%] object-cover m-auto"
                                            alt=""
                                        />
                                        <h3 className="text-red-800 text-xl">
                                            {userLogin.name}
                                        </h3>
                                    </div>
                                )}
                                {nav_links.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? "active__menu"
                                                : ""
                                        }
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                                <button
                                    className="logout_mobile flex px-3 py-2 bg-[#df2020] text-white items-center justify-center rounded-md min-w-[80px] text-xs"
                                    onClick={() => dispatch(removeUserLogin())}
                                >
                                    Log out
                                </button>
                            </div>
                        </div>

                        {/* ======== nav-right-menu ======= */}
                        <div className="nav__right d-flex align-items-center">
                            <span className="cart__icon" onClick={handleCart}>
                                <i className="ri-shopping-basket-line"></i>
                                {totalQuantity > 0 && (
                                    <span className="cart__badge">
                                        {totalQuantity}
                                    </span>
                                )}
                            </span>
                            {isLogin ? (
                                <div className="flex justify-center items-center gap-3 mb-1 relative">
                                    <img
                                        src={avatar}
                                        className="user-avt w-[30px] h-[30px] rounded-[50%] object-cover"
                                        alt=""
                                    />

                                    <button
                                        className="logout_pc flex px-3 py-3 bg-[#df2020] text-white items-center justify-center rounded-md min-w-[80px] max-h-[30px] text-xs"
                                        onClick={() =>
                                            dispatch(removeUserLogin())
                                        }
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <span className="user">
                                    <Link to="/login">
                                        <i className="ri-user-line"></i>
                                    </Link>
                                </span>
                            )}

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Container>
            </header>
            <Carts cartActice={cartActice} setCartActive={setCartActive} />
        </>
    );
};

export default Header;
