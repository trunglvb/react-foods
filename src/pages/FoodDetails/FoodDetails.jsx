import React, { useEffect, useState } from "react";
import products from "../../assets/fake-data/products";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import productImg from "../../assets/images/product_01.1.jpg";
import { useParams } from "react-router-dom";
import "./index.scss";
import ProductCard from "../../components/UI/productCart/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/shopping-cart/cartSlice";
import { addReview } from "../../store/shopping-cart/reviewSlice";

const FoodDetails = () => {
    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");

    const { id } = useParams();
    const product = products.find((item) => item.id === id);

    const [previewImg, setPreviewImg] = useState(product.image01);
    const relatedProduct = products.filter(
        (item) => product.category === item.category
    );

    //const selecttor review
    const reviews = useSelector((state) => state.reviewReducer.reviews);

    //dispatch cart
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    useEffect(() => {
        setPreviewImg(product.image01);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    const handleSubmitDetail = (e) => {
        e.preventDefault();
        dispatch(
            addReview({
                enteredName: enteredName,
                enteredEmail: enteredEmail,
                reviewMsg: reviewMsg,
            })
        );
        setEnteredName("");
        setReviewMsg("");
        setEnteredEmail("");
    };
    return (
        <Helmet title="Product-details">
            <CommonSection title={product.title} />

            <section className="product">
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className="product__images">
                                <div
                                    className="img__item mb-3"
                                    onClick={() =>
                                        setPreviewImg(product.image01)
                                    }
                                >
                                    <img
                                        src={product.image01}
                                        alt=""
                                        className="w-50"
                                    />
                                </div>
                                <div
                                    className="img__item mb-3"
                                    onClick={() =>
                                        setPreviewImg(product.image02)
                                    }
                                >
                                    <img
                                        src={product.image02}
                                        alt=""
                                        className="w-50"
                                    />
                                </div>
                                <div
                                    className="img__item"
                                    onClick={() =>
                                        setPreviewImg(product.image03)
                                    }
                                >
                                    <img
                                        src={product.image03}
                                        alt=""
                                        className="w-50"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="product__main-img">
                                <img
                                    src={previewImg}
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="product__content1">
                                <h2 className="product__title mb-3">
                                    {product.title}
                                </h2>
                                <p className="product__price">
                                    Price: <span>${product.price}</span>
                                </p>
                                <p className="product__category mb-5">
                                    Category: <span>{product.category}</span>
                                </p>

                                <button
                                    className="addToCart_btn"
                                    onClick={() => handleAddItem(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Col>
                        <Col lg="12">
                            <div className="tabs d-flex align-items-center gap-3 py-3">
                                <h6
                                    className={
                                        tab === "desc" ? "tab__active" : ""
                                    }
                                    onClick={() => setTab("desc")}
                                >
                                    Description
                                </h6>
                                <h6
                                    className={
                                        tab === "review" ? "tab__active" : ""
                                    }
                                    onClick={() => setTab("review")}
                                >
                                    Review
                                </h6>
                            </div>

                            {tab === "desc" && (
                                <div className="tab__content">
                                    <p>{product.desc}</p>
                                </div>
                            )}

                            {tab === "review" && (
                                <div className="tab__form mb-3 mt-4">
                                    {reviews.map((review, index) => (
                                        <div
                                            className="review border border-solid border-gray-300 rounded-md pt-2 px-2 mb-2"
                                            key={index}
                                        >
                                            <p className="user__name mb-0">
                                                {review.enteredName}
                                            </p>
                                            <p className="user__email ">
                                                {review.enteredEmail}
                                            </p>
                                            <p className="review__text my-3">
                                                {review.reviewMsg}
                                            </p>
                                        </div>
                                    ))}
                                    <form
                                        className="form"
                                        onSubmit={handleSubmitDetail}
                                    >
                                        <div className="form__group">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your name"
                                                value={enteredName}
                                                onChange={(e) =>
                                                    setEnteredName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={enteredEmail}
                                                required
                                                onChange={(e) =>
                                                    setEnteredEmail(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form__group">
                                            <textarea
                                                required
                                                type="text"
                                                placeholder="Write your review"
                                                rows={5}
                                                value={reviewMsg}
                                                onChange={(e) =>
                                                    setReviewMsg(e.target.value)
                                                }
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="py-2 px-5 bg-[#df2020] text-white rounded-md max-w-[140px]"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            )}
                        </Col>

                        <Col lg="12" className="mb-5 mt-4">
                            <h2 className="related__product-title">
                                You might also like
                            </h2>
                        </Col>
                        {relatedProduct.map((item) => (
                            <Col
                                lg="3"
                                md="4"
                                sm="6"
                                xs="12"
                                className="mb-4"
                                key={item.id}
                            >
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;
