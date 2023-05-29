import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../assets/Banner/banner1.png';
import Banner2 from '../../assets/Banner/banner2.png';
import Banner3 from '../../assets/Banner/banner3.png';
import Banner4 from '../../assets/Banner/banner4.png';
import './styles/BannerSlider.css';
import axios from "axios";

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

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`http://3.34.240.33:8080/board-service/banner/show/listBanner`)
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const data = response.data;
                console.log(data.list.length);
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj= {
                        imageUrl: data.list[i].imageUrl
                    }
                    console.log(obj);
                    objects.push(obj);
                }
                setData(objects);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return(
        <div className="bannerPart">
            {/*<h2>Swipe To Slide</h2>*/}
            <Slider {...settings}>
                {data.map((item) => (
                    <a href='/'><img src={item.imageUrl} alt='promote' className="bannerImg"/></a>
                ))}
            </Slider>
        </div>
    );
}

export default BannerSlider;