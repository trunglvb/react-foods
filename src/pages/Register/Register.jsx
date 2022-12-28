import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { addUser } from "../../store/shopping-cart/userSlice";
import * as Yup from "yup";

const Register = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.users);

    const formik = useFormik({
        initialValues: {
            //day la gia tri cua formik khac voi gia tri state o tren
            name: "",
            email: "",
            password: "",
            confirmedPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("RequiredName")
                .min(4, "Must be 4 characters or more"),
            email: Yup.string()
                .required("RequiredEmail")
                .matches(
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string()
                .required("RequiredPassword")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Password must be 7-19 characters and contain at least one letter, one number and a special character"
                ),
            confirmedPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match"),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log("values", values);
            if (user.find((userData) => userData.name === values.name)) {
                alert("User already exists, please change the username");
            } else {
                dispatch(addUser(values));
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert("Register Success");
                resetForm();
                navigate("/login");
            }
        },
    });
    const navigate = useNavigate();

    return (
        <Helmet title="Sign Up">
            <CommonSection title="Sign Up" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto">
                            <form
                                className="infoform"
                                onSubmit={formik.handleSubmit}
                            >
                                <label className="font-semibold">
                                    Your name
                                </label>
                                <input
                                    className="text-sm"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formik.values.name}
                                    // onChange={(e) =>setName(e.target.value) }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && (
                                    <p className="errorMsg">
                                        {" "}
                                        {formik.errors.name}{" "}
                                    </p>
                                )}

                                <label className="font-semibold">
                                    Your Email
                                </label>
                                <input
                                    className="text-sm"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && (
                                    <p className="errorMsg">
                                        {" "}
                                        {formik.errors.email}{" "}
                                    </p>
                                )}

                                <label className="font-semibold">
                                    Password
                                </label>
                                <input
                                    className="text-sm"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    // onChange={(e) => setPassword(e.target.value)}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.password && (
                                    <p className="errorMsg">
                                        {" "}
                                        {formik.errors.password}{" "}
                                    </p>
                                )}

                                <label className="font-semibold">
                                    Confirm Password
                                </label>
                                <input
                                    //id va name phai trung voi value cua formik
                                    className="text-sm"
                                    type="password"
                                    id="confirmedPassword"
                                    name="confirmedPassword"
                                    placeholder="Confirm your password"
                                    // onChange={(e)  => setConfirmedPassword(e.target.value)}
                                    value={formik.values.confirmedPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.confirmedPassword && (
                                    <p className="errorMsg">
                                        {" "}
                                        {formik.errors.confirmedPassword}{" "}
                                    </p>
                                )}

                                <button
                                    className="bg-red-600 text-white rounded-md my-3 px-3 py-1 float-left w-[120px]"
                                    type="submit"
                                >
                                    Continue
                                </button>
                            </form>
                            <Link to="/login">
                                Already have an account? Login
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;
