import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";
import "./styles/MyPage.css"
import LectureSlider from "../components/Banner/LectureSlider";
import LectureSliderMyPage from "./components/LectureSliderMyPage";

const MyPage = () => {

    const TagBox=({keyword})=> {
        return (
            <a href='/courseList'>
                <div className="user-tag-box">
                    #{keyword}
                </div>
            </a>
        );
    }

    const MyPageContent = () => {

        return(
            <div>
                <div className="MyPageWhole">
                    <div className="UserInfoDiv">
                        <div className="UserInfoSquare">
                            <div className="UserInfoSquareDiv">
                                <div className="UserPhoto">

                                </div>
                                <div className="UserInfos">
                                    <h2>유저 이름</h2>
                                    <p>010-xxxx-xxxx</p>
                                    <p>Parkcoa@gmail.com</p>
                                </div>
                            </div>
                            <div className="UserTagDiv">
                                <TagBox keyword="java"/>
                                <TagBox keyword="k8s"/>
                            </div>
                        </div>
                    </div>
                    <div className="UserCourseInfoDiv">
                        <div className="UserCourseList">
                            <LectureSliderMyPage name = "likeSum">수강중인 강의</LectureSliderMyPage>
                        </div>
                        <div className="UserCourseLikeList">
                            <LectureSliderMyPage name = "likeSum">'👍'한 강의 </LectureSliderMyPage>
                        </div>
                    </div>
                    <div className="UserQuestionInfoDiv">
                        <h3>question info</h3>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Body>
            <MyPageContent />
        </Body>
    );
}

export default MyPage;
