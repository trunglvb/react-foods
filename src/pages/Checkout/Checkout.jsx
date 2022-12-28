import React, {useState} from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../components/UI/common-section/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Checkout = () => {    
    const shippingInfo = [];
    const cartTotalAmount = useSelector((state) => state.cartReducer.totalAmount)
    const shippingCost = 30;

    const totalAmount = cartTotalAmount + Number(shippingCost)

    const formik = useFormik({
        initialValues: {
            //day la gia tri cua formik khac voi gia tri state o tren
            name: "",
            email: "",
            phone: "",
            country: "",
            city:"",
            postal: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("RequiredName").min(4, "Must be 4 characters or more"),
            email: Yup.string().required("RequiredEmail").matches(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, "Please enter a valid email address"),
            
            phone: Yup.string()
            .required("Required")
            .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Must be a valid phone number"
            ),
            country: Yup.string().required("RequiredName").min(4, "Must be 4 characters or more"),
            city: Yup.string().required("RequiredName").min(4, "Must be 4 characters or more"),
            postal: Yup.string()
            .required("Required")
            .matches(
            /^(?:[0-8]\d|9[0-8])\d{3}$/,
            "Must be a valid phone number"
            )

        }),
        onSubmit: async (values, actions) => {
            shippingInfo.push(values)
            console.log("shipping", shippingInfo)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            actions.resetForm()
        }
        
    })

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section className="checkout">
                <Container >
                    <Row>
                        <Col lg='8' md='6'>
                            <h6 className="mb-4">Shipping Address</h6>
                            <form className="checkout__form" onSubmit={formik.handleSubmit}>
                                <div className="form__group">
                                    <input 
                                        type="text" 
                                        placeholder="Enter your name"
                                        id="name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.name && (
                                        <p className="errorMsg"> {formik.errors.name} </p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        name='email'
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && (
                                        <p className="errorMsg"> {formik.errors.email} </p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input 
                                        type="number" 
                                        placeholder="Phone number"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.phone && (
                                        <p className="errorMsg"> {formik.errors.phone} </p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input 
                                        type="text" 
                                        placeholder="Country"
                                        name="country"
                                        value={formik.values.country}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.country && (
                                        <p className="errorMsg"> {formik.errors.country} </p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input 
                                        type="text" 
                                        placeholder="City"
                                        name="city"
                                        id="city"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.city && (
                                        <p className="errorMsg"> {formik.errors.city} </p>
                                    )}
                                </div>
                                <div className="form__group">
                                    <input 
                                        type="number" 
                                        placeholder="Postal code"
                                        name="postal"
                                        value={formik.values.postal}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.postal && (
                                        <p className="errorMsg"> {formik.errors.postal} </p>
                                    )}
                                </div>
                                <button type="submit" className="py-2 px-5 bg-[#df2020] text-white rounded-md">Payment</button>
                            </form>
                          
                        </Col>

                        <Col lg='4' md='6'>
                            <div className="checkout__bill">
                                <h6 className="flex items-center justify-between mb-3">Subtotal: <span>${cartTotalAmount}</span></h6>
                                <h6 className="flex items-center justify-between mb-3">Shipping: <span>${shippingCost}</span></h6>
                                <div className="checkout__total">
                                    <h5 className="flex items-center justify-between text-xl font-semibold">Total: <span>${totalAmount}</span></h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
