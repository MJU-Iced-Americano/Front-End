import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import '../../components/Banner/styles/slick.css';
import '../../components/Banner/styles/slick-theme.css';
import '../styles/LectureSliderMyPage.css';
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import axios from "axios";
import {Link} from "react-router-dom";


const LectureSlider=(props)=> {
    const [data, setData] = useState([]);
    useEffect( () => {
        if(props.name === "likeSum") {
            getCourses("likeSum");
        } else if(props.name === "createdAt") {
            getCourses("createdAt");
        } else if(props.name === "hits") {
            getCourses("hits");
        }
        }, [props.name]);

    const getCourses = () => {

        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken = "Bearer "+ document.cookie.substring(name.length, document.cookie.length);
        console.log(ssoToken);

        axios.get (`http://gateway.socoa.online:8000/mypage/user/course-list`, {
            headers: {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data);
                const content = response.data.data.content;

                const objects = [];
                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < content.length; i++) {
                    const obj = {
                        courseIndex: content[i].courseIndex,
                        category: content[i].category,
                        courseName: content[i].courseName,
                        price: content[i].price,
                        difficulty: content[i].difficulty,
                        courseTitlePhotoUrl: content[i].courseTitlePhotoUrl,
                    }
                    objects.push(obj);
                }
                setData(objects);
                // 배열에 저장된 객체를 출력
                // console.log(objects  + "먕");
            })
            .catch(error => {
                console.error(error);
            });


    };
    const Image = styled.img`
      width: inherit;
      height: 220px;
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
    };

    return(
        <div className="lecturePart">
            <h2>{props.children}</h2>
            <Slider {...settings}>
                {data.map((item, i) => (
                    <div className="lecture-TileWrapper" key={i}>
                        <div className="lecture-Tile">
                            <Link to={`/Course/${item.courseIndex}`}>
                                <Image src={item.courseTitlePhotoUrl} className="lectureImg" />
                            </Link>
                            <div className="lecture-hovered">
                                <h1>{item.courseName}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LectureSlider;
