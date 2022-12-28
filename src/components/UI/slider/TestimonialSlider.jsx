import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import './index.scss'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        swiperToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div>
                <p className='review__text'>
                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava01} alt="" className='rounded'/>
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava02} alt="" className='rounded'/>
                    <h6>Martin Dick</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="" className='rounded'/>
                    <h6>Harry Liu</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider