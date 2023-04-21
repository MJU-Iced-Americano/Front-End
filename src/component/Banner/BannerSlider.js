import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../data/banner1.png';
import Banner2 from '../../data/banner2.png';
import Banner3 from '../../data/banner3.png';
import Banner4 from '../../data/banner4.png';
import './BannerSlider.css';

const BannerSlider =()=>{
    const settings = {
        slide: 'img',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        prevArrow: (
            <button/>
        ),
        nextArrow: (
            <button/>
        )
    };


    return(
        <div className="bannerPart">
            {/*<h2>Swipe To Slide</h2>*/}
            <Slider {...settings}>
                <a href='/'><img src={Banner1} alt='promote' className="bannerImg"/></a>
                <a href='/'><img src={Banner2} alt='promote' className="bannerImg"/></a>
                <a href='/'><img src={Banner3} alt='promote' className="bannerImg"/></a>
                <a href='/'><img src={Banner4} alt='promote' className="bannerImg"/></a>
            </Slider>
        </div>
    );
}

export default BannerSlider;