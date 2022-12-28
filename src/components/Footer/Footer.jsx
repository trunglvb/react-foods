import React from "react";
import "./index.scss";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="footer__logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treat</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse sed enim et tellus
                                faucibus finibus eget ut lorem. In gravida mi
                                lectus, et pretium nulla vulputate quis. Cras
                                convallis risus sed magna dignissim vulputate.
                            </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <p>Location: Ha Noi, Viet Nam</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone: 0999999999</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Email: trunglvb.hust@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <p>Subcribe our Newsletter</p>

                        <div className="newsletter">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter your email"
                            />
                            <span>
                                <i className="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className="copyright__text">
                            Copyright - 2022, website make by trunglvb
                        </p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="social__links d-flex align-items-center gap-4">
                            <p className="m-0">Follow: </p>
                            <span>
                                <Link to="https://www.facebook.com/trunglvb.hust/">
                                    <i className="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.facebook.com/trunglvb.hust/">
                                    <i className="ri-github-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.facebook.com/trunglvb.hust/">
                                    <i className="ri-spotify-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.facebook.com/trunglvb.hust/">
                                    <i className="ri-youtube-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
