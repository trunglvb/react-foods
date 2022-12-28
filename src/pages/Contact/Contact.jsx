import React from "react";
import "./index.scss";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <Helmet tilte='Contact'>
        <CommonSection title="Contact Us"/>

        <section className="contact">
			<Container>
				<div className="flex flex-col justify-center items-center m-auto">
					<h1 className="text-5xl font-semibold mb-3">Contact Us</h1>
					<span className="text-xl text-slate-500">Any question or remarks? Just write us a message</span>
				</div>
				<Row className="lg:p-10 p-3">
					<Col lg='5' md='12' sm='12' xs='12' className="bg-violet-900 px-10 py-5 text-slate-300 rounded-2xl relative contact__left">
						<div className="mb-5">
							<h1 className='font-semibold text-slate-300 mb-3'>Contact Infomation</h1>
							<span className="text-[18px]">Fill up the form and out Team will get back to you within 24 hours</span>
						</div>
						<div className="flex flex-col gap-5 mb-[130px]">
							<div className="flex items-center gap-4">
								<i className="ri-phone-fill text-red-300 text-2xl"></i>
								<span className="text-[18px]">+ 09127347828</span>
							</div>
							<div className="flex items-center gap-4">
								<i className="ri-mail-fill text-red-300 text-2xl"></i>
								<span className="text-[18px]">contact.food@gmail.com</span>
							</div>
							<div className="flex items-center gap-4">
								<i className="ri-map-pin-2-fill text-red-300 text-2xl"></i>
								<span className="text-[18px]">102 Street 2714 Don</span>
							</div>
						</div>	
						<div className="flex gap-4 contact__icon">
							<span>
                                <Link to='https://www.facebook.com/trunglvb.hust/'>
                                    <i className="ri-facebook-line text-2xl hover:bg-red-400 hover:text-white flex items-center justify-center w-10 h-10 rounded-full"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='https://www.facebook.com/trunglvb.hust/'>
                                    <i className="ri-github-line text-2xl hover:bg-red-400  hover:text-white flex items-center justify-center w-10 h-10 rounded-full"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='https://www.facebook.com/trunglvb.hust/'>
                                    <i className="ri-spotify-line text-2xl hover:bg-red-400 hover:text-white flex items-center justify-center w-10 h-10 rounded-full"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='https://www.facebook.com/trunglvb.hust/'>
                                    <i className="ri-youtube-line text-2xl hover:bg-red-400  hover:text-white flex items-center justify-center w-10 h-10 rounded-full"></i>
                                </Link>
                             </span>
						</div>
						<div className="absolute bottom-0 right-0 bg-pink-500 w-[42%] h-[35%] contact__circle">

						</div>
					</Col>
					<Col lg='7' md='12' sm='12' xs='12' className="lg:p-10">
						<form>
							<Row className="lg:mb-5">
								<Col lg='6' md='6' sm='12' xs='12' className="lg:pr-5 mb-3">
									<div className="flex flex-col">
										<span className="font-semibold test">First Name</span>
										<input 
											type="text" 
											placeholder="Enter your first name"
											className="contact__input"
										/>
									</div>
								</Col>
								<Col lg='6' md='6' sm='12' xs='12' className="lg:pl-5 mb-3">
									<div className="flex flex-col">
										<span className="font-semibold">Last Name</span>
										<input 
											type="text" 
											placeholder="Enter your last name"
											className="contact__input"
										/>
									</div>
								</Col>
							</Row>
							<Row className="lg:mb-5">
								<Col lg='6' md='6' sm='12' xs='12' className="lg:pr-5 mb-3">
									<div className="flex flex-col">
										<span className="font-semibold">Mail</span>
										<input 
											type="text" 
											placeholder="Enter your email"
											className="contact__input"
										/>
									</div>
								</Col>
								<Col lg='6' md='6' sm='12' xs='12' className="lg:pl-5 mb-3">
									<div className="flex flex-col">
										<span className="font-semibold">Phone</span>
										<input 
											type="text" 
											placeholder="Enter your phone number"
											className="contact__input"
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg='12' md='12' sm='12' xs='12'>
									<div className="flex flex-col">
										<span className="font-semibold">Message</span>
										<input 
											type="text" 
											placeholder="Write your message"
											className="contact__input"
										/>
									</div>
								</Col>
							</Row>
							<button className="lg:float-right px-5 py-3 bg-purple-800 text-[18px] rounded-xl font-semibold mt-[50px] text-white">Send Message</button>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
      </Helmet>
    )
};

export default Contact;
