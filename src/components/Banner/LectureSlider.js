import React from "react";
import Slider from "react-slick";
import './styles/slick.css';
import './styles/slick-theme.css';
import './styles/LectureSlider.css';
import lecture01 from '../../assets/Banner/lecture01.png';
import lecture02 from '../../assets/Banner/lecture02.png';
import lecture03 from '../../assets/Banner/lecture03.png';
import lecture04 from '../../assets/Banner/lecture04.png';
import lecture05 from '../../assets/Banner/lecture05.png';
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const LectureSlider=(props)=> {
    const Image = styled.img`
      width: inherit;
      height: inherit;
    `;

    const settings = {
        // slide: 'div',
        dots: false,
        infinite: true,
        speed : 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow:true,
        nextArrow: (
            <button type="button" className="slick-next">
                <AiOutlineDoubleRight/>
            </button>
        ),
        prevArrow:(
            <button type="button" className="slick-next">
                <AiOutlineDoubleLeft/>
            </button>
        )
        // prevArrow: (
        //     <Prev>
        //         <AiOutlineDoubleRight className="arrowLogo"/>
        //     </Prev>
        // )
    };

    return(
        <div className="lecturePart">
            <h2>{props.name}</h2>
            <Slider {...settings}>
                {/*<a href='/'><img src={lecture01} alt='promote' className="lectureImg"/></a>*/}
                {/*<a href='/'><img src={lecture02} alt='promote' className="lectureImg"/></a>*/}
                {/*<a href='/'><img src={lecture03} alt='promote' className="lectureImg"/></a>*/}
                {/*<a href='/'><img src={lecture04} alt='promote' className="lectureImg"/></a>*/}
                {/*<a href='/'><img src={lecture05} alt='promote' className="lectureImg"/></a>*/}
                <div className="lecture-Tile">
                    <a href='/'><Image src={lecture01} className="lectureImg"/></a>
                    <div className="lecture-hovered">
                        <h1>5일안에 Python 부수기</h1>
                    </div>
                </div>
                <div>
                    <a href='/LecturePage'><Image src={lecture02} className="lectureImg"/></a>
                </div>
                <div>
                    <a href='/'><Image src={lecture03} className="lectureImg"/></a>
                </div>
                <div>
                    <a href='/'><Image src={lecture04} className="lectureImg"/></a>
                </div>
                <div>
                    <a href='/'><Image src={lecture05} className="lectureImg"/></a>
                </div>
            </Slider>
        </div>
    )
}

export default LectureSlider;