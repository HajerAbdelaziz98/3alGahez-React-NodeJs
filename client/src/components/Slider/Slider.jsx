import React, { useState } from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './slider.css'
function HeaderSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
        focusOnSelect: true
    }
    return (
        <Slider {...settings}>
            <div className="slider-card s1">

            </div>
            <div className="slider-card s2">
            </div>
            <div className="slider-card s3">
            </div>
            <div className="slider-card s4">
            </div>
        </Slider>
    );
}

export default HeaderSlider;