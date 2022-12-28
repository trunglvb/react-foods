import React, { useRef, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserLogin } from "../../store/shopping-cart/loginSlice";

const Login = () => {
    const navigate = useNavigate("");
    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer.users);
    const isLogin = useSelector((state) => state.loginReducer.isLogin)
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const checkUser = users.find(
        (user) => user.email === loginEmail && user.password === loginPassword
    );
    
    
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (checkUser) {
            alert("You are loggined")
            dispatch(addUserLogin(checkUser))
            navigate("/home");  
        } else {
            alert("User not exist");
        }
    };
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            {
                isLogin ? <span className="flex items-center justify-center py-5">You are loggined</span> :
                <section>
                    <Container>
                        <Row>
                            <Col
                                lg="6"
                                md="6"
                                sm="12"
                                className="m-auto text-center"
                            >
                                <form
                                    className="form mb-5"
                                    onSubmit={handleSubmitLogin}
                                >
                                    <div className="form__group">
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email"
                                            value={loginEmail}
                                            onChange={(e) =>
                                                setLoginEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input
                                            required
                                            type="password"
                                            placeholder="Password"
                                            value={loginPassword}
                                            onChange={(e) =>
                                                setLoginPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#df2020] text-white rounded-md  hover:text-white"
                                    >
                                        Login
                                    </button>
                                </form>
                                <Link to="/register">
                                    Don't have an account? Create an account
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }

        
        </Helmet>
    );
};

export default Login;
