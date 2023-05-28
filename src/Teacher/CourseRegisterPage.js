
import Body from "../components/Body/Body";
import React from "react";
import '../Course/CourseMainPage.css';

import {Link} from "react-router-dom";
import {RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
import {GrCart} from "react-icons/gr";
import Accordion from "react-bootstrap/Accordion";
import {BsPlayCircle} from "react-icons/bs";
import full_cocoa from "../assets/icons/socoa-icon 1.png";
import cocoa_5 from "../assets/icon_group/cocoa_5.png";
import cocoa_4 from "../assets/icon_group/cocoa_4.png";
import cocoa_3 from "../assets/icon_group/cocoa_3.png";
import cocoa_2 from "../assets/icon_group/cocoa_2.png";
import cocoa_1 from "../assets/icon_group/cocoa_1.png";
import {FaAngleDown, FaRegThumbsUp} from "react-icons/fa";
import defaultimage from "../assets/temp/image 14.png";
import {AiFillAlert} from "react-icons/ai";
import ComplaintModal from "../Course/components/ComplaintModal";

const CourseRegisterPage=() => {
    const CourseRegisterContent=()=>{
        return (

            <div className="whole">
                <div className="overview_top">
                    <div className="overview_1">
                        <div className="course_category">ㅋㅋ</div>
                        <div className="course_name">ㅋㅋ</div>
                    </div>
                    <div className="overview_2">
                        <div className="course_like">
                            <RiHeart2Fill size={45}/>
                        </div>
                        <div>6363</div>
                    </div>
                </div>
                <hr/>
                <div className="overview_bottom">
                    <div className="overview_left">
                        <div className="video_temp"></div>
                        <div className="regi_button">
                            <div className="course_regi">수강하러 가기</div>
                            <div className="course_cart"><GrCart size={28}/></div>
                            {/*cart 색깔 변경부터 다시 시작 */}
                        </div>
                    </div>
                    <div className="overview_right">
                        <div className="tag_wrapper">
                            <div className="tags">
                                tags
                            </div>
                        </div>
                        <div className="overview_detail">
                            {/* 나중에 div로 쪼갤것*/}
                            <div className="details">강사<br/></div>
                            <div className="details">누적 강의 조회수 <br/></div>
                            <div className="details">총 강의시간 <br/></div>
                            <div className="details">가격 <br/></div>
                            <div className="details">난이도 :

                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="description_wrapper" id="section1">
                    <div className="for_anchor"></div>

                    <div className="section_title">강의설명</div>
                    <div className="description_detail">
                        이러쿵~저러쿵~
                    </div>
                </div>
                <div className="curriculum_wrapper" id="section2">
                    <div className="for_anchor"></div>
                    <div className="section_title">커리큘럼</div>

                    {/*<Accordion className="accWhole" defaultActiveKey="0" flush>*/}
                    {/*    {detail.curriculumReadDtoList && detail.curriculumReadDtoList.map((cur, i) => (*/}

                    {/*        <Accordion.Item className="item" eventKey={i}>*/}
                    {/*            <Accordion.Header className="chapter" >Chapter {i+1}. {cur.curriculumTitle}</Accordion.Header>*/}
                    {/*            {cur.lectureReadDtos && cur.lectureReadDtos.map((lec, i) => (*/}
                    {/*                <Accordion.Body className="chapter_detail" key={i}>*/}
                    {/*                    <div><BsPlayCircle/></div>*/}
                    {/*                    <div className="lecture_title">{lec.lectureTitle}</div>*/}
                    {/*                    <div className="time">{lec.lectureTime}</div>*/}
                    {/*                </Accordion.Body>*/}
                    {/*            ))}*/}

                    {/*        </Accordion.Item>*/}
                    {/*    ))}*/}
                    {/*</Accordion>*/}
                </div>
            </div>

        );
    }

    return(
        <Body>
            <CourseRegisterContent/>
        </Body>
    )
}

export default CourseRegisterPage;