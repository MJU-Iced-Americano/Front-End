import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LectureSlider.css';

const LectureSlider=()=> {
    const settings = {
        slide: 'div',
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <div className="lecturePart">
            <h2>BEST 강의</h2>
            <Slider {...settings}>
                <div className="lectureTile"></div>
                <div className="lectureTile"></div>
                <div className="lectureTile"></div>
                <div className="lectureTile"></div>
                <div className="lectureTile"></div>
                <div className="lectureTile"></div>
            </Slider>
        </div>
    )
}

export default LectureSlider;