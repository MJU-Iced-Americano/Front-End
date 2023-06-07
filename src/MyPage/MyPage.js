import React, {useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";
import "./styles/MyPage.css"
import LectureSlider from "../components/Banner/LectureSlider";
import LectureSliderMyPage from "./components/LectureSliderMyPage";
import axios from "axios";

const MyPage = () => {
    const [nickname, setNickname] = useState(''); // 로그인 상태를 나타내는 state
    const [phoneNumber, setPhoneNumber] = useState(''); // 로그인 상태를 나타내는 state
    const [userInformationType, setUserInformationType] = useState(''); // 로그인 상태를 나타내는 state

    useEffect(() => {

        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken = "Bearer "+ document.cookie.substring(name.length, document.cookie.length);

        axios.get('http://gateway.socoa.online:8000/board-service/question/myPage/show/myInfo', {
            headers: {
                "Authorization" : ssoToken
            }
        }).then(
            response => {
                setNickname(response.data.data.nickname)
                setPhoneNumber(response.data.data.phoneNumber)
                setUserInformationType(response.data.data.userInformationType)

            }
        )
    }, [])

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
                                    <h2>{nickname}</h2>
                                    <p>{phoneNumber}</p>
                                    <p>{userInformationType}</p>
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
