import React, { useState, useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./index.scss";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../../components/UI/category/Category";
import serviceImg01 from "../../assets/images/service-01.png";
import serviceImg02 from "../../assets/images/service-02.png";
import serviceImg03 from "../../assets/images/service-03.png";
import products from "../../assets/fake-data/products";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";
import ProductCard from "../../components/UI/productCart/ProductCard";

import whyImg from "../../assets/images/location.png";
import networkImg from "../../assets/images/network.png";
import TestimonialSlider from "../../components/UI/slider/TestimonialSlider";

const featureData = [
    {
        title: "Quick Delivery",
        image: serviceImg01,
        desc: "Consectetur adipiscing elit. Nam sagittis lectus id tellus molestie, sit amet suscipit velit tincidunt. ",
    },
    {
        title: "Super Dine In",
        image: serviceImg02,
        desc: "Consectetur adipiscing elit. Nam sagittis lectus id tellus molestie, sit amet suscipit velit tincidunt. ",
    },
    {
        title: "Easy Pick Up",
        image: serviceImg03,
        desc: "Consectetur adipiscing elit. Nam sagittis lectus id tellus molestie, sit amet suscipit velit tincidunt. ",
    },
];

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter(
            (item) => item.category === "Pizza"
        );
        const slicePizza = filteredPizza.slice(0, 4);

        setHotPizza(slicePizza);
    }, []);
    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }
        if (category === "BURGER") {
            const filterBurger = products.filter(
                (item) => item.category === "Burger"
            );
            setAllProducts(filterBurger);
        }
        if (category === "PIZZA") {
            const filterPizza = products.filter(
                (item) => item.category === "Pizza"
            );
            setAllProducts(filterPizza);
        }
        if (category === "BREAD") {
            const filterBread = products.filter(
                (item) => item.category === "Bread"
            );
            setAllProducts(filterBread);
        }
    }, [category]);
    return (
        <>
            <Helmet title="Home">
                <section>
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <div className="hero__content">
                                    <h5 className="mb-3">
                                        Easy way to make an order
                                    </h5>
                                    <h1 className="mb-4 hero__title">
                                        <span>HUNGRY?</span> Just wait <br /> to
                                        food at<span> your door</span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam sagittis lectus id
                                        tellus molestie, Phasellus ac nulla
                                        aliquam, pretium nunc ac, fringilla mi.{" "}
                                    </p>
                                    <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                        <button className="order__btn d-flex align-items-center justify-content-between">
                                            Order now{" "}
                                            <i className="ri-arrow-right-s-line"></i>
                                        </button>
                                        <button className="all__foods-btn">
                                            <Link to="/foods">
                                                See all foods
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="hero__service d-flex align-items-center mt-4">
                                        <p className="d-flex align-items-center gap-2">
                                            <span className="shipping__icon">
                                                <i className="ri-car-line"></i>
                                            </span>
                                            Nothing shipping charge
                                        </p>
                                        <p className="d-flex align-items-center gap-2">
                                            <span className="shipping__icon">
                                                <i className="ri-shield-check-line"></i>
                                            </span>
                                            100% secure checkout
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <div className="hero__img">
                                    <img
                                        src={heroImg}
                                        alt="hero"
                                        className="w-100"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="pt-0">
                    <Category />
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center feature">
                                <h5 className="feature__subtitle mb-4">
                                    What we serve
                                </h5>
                                <h2 className="feature__title">
                                    Just sit back at home
                                </h2>
                                <h2 className="feature__title">
                                    We will <span>take care</span>
                                </h2>
                                <p className="mb-1 mt-4 feature__text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam sagittis lectus id
                                    tellus molestie, sit amet suscipit velit
                                    tincidunt
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam sagittis lectus id
                                    tellus molestie, sit amet suscipit velit
                                    tincidunt. Phasellus ac nulla aliquam
                                </p>
                            </Col>
                            {featureData.map((item, index) => (
                                <Col
                                    lg="4"
                                    md="6"
                                    sm="6"
                                    key={index}
                                    className="mt-5"
                                >
                                    <div className="feature__item text-center px-5 py-3">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-25 mb-3 m-auto"
                                        />
                                        <h5 className="fw-bold mb-3">
                                            {item.title}
                                        </h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center">
                                <h2>Popular Foods</h2>
                            </Col>
                            <Col lg="12">
                                <div className="food__category d-flex align-items-center justify-content-around ">
                                    <button
                                        className={`all__btn ${
                                            category === "ALL"
                                                ? " foodBtnActive"
                                                : ""
                                        }`}
                                        onClick={() => setCategory("ALL")}
                                    >
                                        All
                                    </button>
                                    <button
                                        className={`d-flex align-items-center gap-2 ${
                                            category === "BURGER"
                                                ? " foodBtnActive"
                                                : ""
                                        }`}
                                        onClick={() => setCategory("BURGER")}
                                    >
                                        <img src={foodCategoryImg01} alt="" />
                                        Burger
                                    </button>
                                    <button
                                        className={`d-flex align-items-center gap-2 ${
                                            category === "PIZZA"
                                                ? " foodBtnActive"
                                                : ""
                                        }`}
                                        onClick={() => setCategory("PIZZA")}
                                    >
                                        <img src={foodCategoryImg02} alt="" />
                                        Pizza
                                    </button>
                                    <button
                                        className={`d-flex align-items-center gap-2 ${
                                            category === "BREAD"
                                                ? " foodBtnActive"
                                                : ""
                                        }`}
                                        onClick={() => setCategory("BREAD")}
                                    >
                                        <img src={foodCategoryImg03} alt="" />
                                        Bread
                                    </button>
                                </div>
                            </Col>
                            {allProducts.slice(0, 10).map((item, index) => (
                                <Col
                                    lg="3"
                                    md="4"
                                    sm="6"
                                    xs="12"
                                    key={index}
                                    className="mt-5"
                                >
                                    <ProductCard item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <section className="why-choose-us">
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <img src={whyImg} alt="" className="w-100" />
                            </Col>
                            <Col lg="6" md="6" className="m-auto">
                                <div className="why__tasty-treat">
                                    <h2 className="tasty__treat-title mb-4">
                                        Why <span>Tasty Treat</span> ?
                                    </h2>
                                    <p className="tasty__treat-desc">
                                        Lorem ipsum dolor sit amet,Lorem ipsum
                                        dolor sit amet,Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua.
                                    </p>

                                    <ListGroup className="mt-4 ">
                                        <ListGroupItem className="border-0 ps-0">
                                            <p className="choose__us-title d-flex align-items-center gap-2">
                                                <i className="ri-checkbox-circle-line"></i>
                                                Fresh and Tasty foods
                                            </p>
                                            <p className="choose_us-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit
                                            </p>
                                        </ListGroupItem>

                                        <ListGroupItem className="border-0 ps-0">
                                            <p className="choose__us-title d-flex align-items-center gap-2">
                                                <i className="ri-checkbox-circle-line"></i>
                                                Quality support
                                            </p>
                                            <p className="choose_us-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit
                                            </p>
                                        </ListGroupItem>

                                        <ListGroupItem className="border-0 ps-0">
                                            <p className="choose__us-title d-flex align-items-center gap-2">
                                                <i className="ri-checkbox-circle-line"></i>
                                                Order from any location
                                            </p>
                                            <p className="choose_us-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit
                                            </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="pt-0">
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center mb-5">
                                <h2>How Pizza</h2>
                            </Col>
                            {hotPizza.map((item, index) => (
                                <Col lg="3" md="4" key={index}>
                                    <ProductCard item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <div className="testimonial">
                                    <h5 className="testimonial__subtitle mb-4">
                                        Testimonial
                                    </h5>
                                    <h2 className="testimonial__title">
                                        What our <span>customers</span> are
                                        saying
                                    </h2>
                                    <p className="testimonial__desc">
                                        Lorem ipsum dolor sit amet lorem ipsum
                                        dolor sit amet consectetur adipiscing
                                        elit consectetur adipiscing elit
                                    </p>
                                    <TestimonialSlider />
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <img
                                    src={networkImg}
                                    alt=""
                                    className="w-100"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    );
};

export default Home;
