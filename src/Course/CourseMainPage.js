import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './CourseMainPage.css';
import Accordion from "react-bootstrap/Accordion";
import { BsPlayCircle } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import full_cocoa from "../assets/icons/socoa-icon 1.png";
import Body from "../components/Body/Body";

const CourseMainPage=()=> {

    // const navigateToRegular = () => {
    //     navigate("/RegularFAQ");
    // };
    const CourseMainPageContent = () => {
        return (
                <div className="whole">
                    {/*anchor는 헤더랑 푸터 다시 받고 해보깅 ~!*/}
                    <div className="anchors">
                        <a href="#section1">강의설명</a>
                        <a href="#section2">커리큘럼</a>
                        <a href="#section3">수강평</a>
                    </div>

                    <div className="description_wrapper" id="section1">
                        <div className="for_anchor"></div>

                        <div className="course_category">강의설명</div>
                        <div className="description_detail"> 넓고 얕게 외워서 컴퓨터 공학 전공자가 되고 싶은 모든 비전공 초보자를 위한 강의입니다.
                            컴퓨터 구조, 운영체제 등 컴퓨터 공학 전공 필수과목에서 어떤 것을 배울 수 있는지 빠른 시간에
                            알 수 있습니다. 무엇보다 외워서라도 끝낼 수 있습니다!
                        </div>
                    </div>
                    <div className="curriculum_wrapper" id="section2">
                        <div className="for_anchor"></div>
                        <div className="course_category">커리큘럼</div>
                        <Accordion className="accWhole" defaultActiveKey="0" flush>
                            <Accordion.Item className="item">
                                <Accordion.Header className="chapter"> Chapter 1. 스프링이란 </Accordion.Header>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 무엇인가요?
                                </Accordion.Body>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 이런건가요?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="item" eventKey="1">
                                <Accordion.Header className="chapter"> Chapter 2. 스프링이란 </Accordion.Header>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 무엇인가요?
                                </Accordion.Body>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 이런건가요?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="item" eventKey="2">
                                <Accordion.Header className="chapter"> Chapter 3. 스프링이란 </Accordion.Header>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 무엇인가요?
                                </Accordion.Body>
                                <Accordion.Body>
                                    <BsPlayCircle/> 스프링이란 이런건가요?
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                    <div className="review_wrapper" id="section3">
                        <div className="for_anchor"></div>
                        <div className="course_category">수강평</div>
                        <div className="box_wrapper">
                            <div className="mainbox1">
                                <h2>4.6</h2>
                                <div className="cocoa_whole">
                                    {/*실제로 리뷰 값 받을 때에는 5개, 4개, 4개 반 등으로 만들어놓은 아이콘 묶음을 선택적으로 적용하게끔. */}
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                </div>
                                <div className="sub">(24개의 수강평)</div>
                            </div>
                            <div className="mainbox2">
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                        <img className="icon_main2" src={full_cocoa}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review_list">
                            <div className="review_listITem">
                                <div className="sections">
                                    <div className="section1"><BsPersonCircle className="profile"/></div>
                                    <div className="section2">
                                        <div className="cocoa_num2">00000</div>
                                        <div className="user_name">에드먼드 킴</div>
                                    </div>
                                    <div className="review_detail">강의가 너무 좋아요. 유익해요 ! 교수님이 친절하시고 강의가
                                        재밌고 아주 즐겁습니다. 아녕하세요 잘 들어가고 있나요? 안녕하시네용 . 오늘 저작권
                                        과제 내야하는데 큰일ㄴ이 났어요. 큰일이 났어요. 오늘 다 할 수 있을까... 내야하ㅡ는데
                                    </div>

                                </div>
                            </div>
                            <div className="review_listITem">
                                <div className="sections">
                                    <div className="section1"><BsPersonCircle className="profile"/></div>
                                    <div className="section2">
                                        <div className="cocoa_num2">00000</div>
                                        <div className="user_name">에드먼드 킴</div>
                                    </div>
                                    <div className="review_detail">강의가 너무 좋아요. 유익해요 ! 교수님이 친절하시고 강의가
                                        재밌고 아주 즐겁습니다. 아녕하세요 잘 들어가고 있나요? 안녕하시네용 .
                                    </div>

                                </div>
                            </div>
                            <div className="review_listITem">
                                <div className="sections">
                                    <div className="section1"><BsPersonCircle className="profile"/></div>
                                    <div className="section2">
                                        <div className="cocoa_num2">00000</div>
                                        <div className="user_name">에드먼드 킴</div>
                                    </div>
                                    <div className="review_detail">강의가 너무 좋아요. 유익해요 !</div>

                                </div>
                            </div>
                            <div className="input_wrapper">
                                <input className="input_css" type="text" placeholder="후기를 입력하세요. "></input>
                                <div className="create-button"> 추가</div>
                            </div>
                        </div>
                    </div>

                </div>

        );
    }
    return (
        <Body>
            <CourseMainPageContent/>
        </Body>
    )
}
export default CourseMainPage;