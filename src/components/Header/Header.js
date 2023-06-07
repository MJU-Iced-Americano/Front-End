import '../../styles/Header/Header.css';
import {IoMdMenu} from 'react-icons/io';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import Socoa from '../../assets/Footer/socoa-ver2.png';
import {Component, useEffect, useState} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";




const Header = ()=> {
        const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 나타내는 state
        const [userId, setUserId] = useState(''); // 사용자 ID을 저장하는 state
        const [nickname, setNickName] = useState(''); // 사용자 닉네임을 저장하는 state
        const [userInformationType, setuserInformationType]  = useState('');
    useEffect(() => {

        // 페이지가 로드될 때 쿠키를 확인하고 로그인 상태를 업데이트
        const checkLoginStatus = () => {
            const ssoClientCookie = document.cookie.includes('SOCOA-SSO-TOKEN');
            setIsLoggedIn(ssoClientCookie);

            if (ssoClientCookie) {
                const jwtToken = getJwtTokenFromCookie(); // 쿠키에서 JWT 토큰 가져오기
                if (jwtToken) {
                    const decodedToken = jwtDecode(jwtToken); // JWT 토큰 해독
                    setUserId(decodedToken.sub); // 사용자 닉네임 설정
                    console.log("jwt token sub(userId):"+decodedToken.sub);
                    // http://login.socoa.online/user/response_user/"+decodedToken.sub
                    axios.get("http://localhost/user/response_user/"+decodedToken.sub)
                        .then(response => {
                            console.log(response.data);
                            setuserInformationType(response.data.userInformationType);
                            setNickName(response.data.nickname);
                            const user = response.data.userInformationType;
                            const nickname = response.data.nickname;
                            console.log("userInformationType: "+user);
                            console.log("nickname: "+nickname);
                        }) .catch(error=> {
                            console.error(error);
                    });
                }
            }
        };

        checkLoginStatus();
    }, []);


                        const getJwtTokenFromCookie = () => {
        // 쿠키에서 JWT 토큰 값을 추출하는 함수
        const name = 'SOCOA-SSO-TOKEN=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return '';
    };
    const handleLogout = () => {
        // 쿠키 삭제
        document.cookie = 'SOCOA-SSO-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=socoa.online; path=/;';

    };

    return (
        <header className="header">
            <div className="iconSect">
                <a href="/"><img src={Socoa} alt='logo image' className="SocoaLogo"/></a>
                <div className="category-menu">
                    <div className="hotNavBtn">
                        <a href="/Information" className="btnMainItem">회사소개 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/Information">비전 및 목표</a>
                            <a className="navbar-item" href="/Information">회사 연혁</a>
                            <a className="navbar-item" href="/InfoTeacherList">강사진 소개</a>
                        </div>
                    </div>
                    <div className="hotNavBtn">
                        <a href="/courseList" className="btnMainItem"> 강의목록 </a>
                    </div>
                    <div className="hotNavBtn">
                        <a href="/FAQPage" className="btnMainItem"> 커뮤니티 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/FAQPage">자주 묻는 질문</a>
                            <a className="navbar-item" href="/QnAPage">질문 & 답변</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loginSect">
                {isLoggedIn ? (
                    <div className="loginBtn" onClick={handleLogout}>
                        <a href="http://login.socoa.online/user/logout">Logout</a>
                    </div>
                ) : (
                    <div className="loginBtn">
                        <a href="http://login.socoa.online/user/login">Login</a>
                        <div className="loginBtn"> <a href="http://localhost/user/login"> LoginTest </a></div>

                    </div>
                )}
                {/*<div className="loginBtn"> <a href="http://localhost/user/login"> LoginTest </a></div>*/}
                {/*{userId && (*/}
                {/*    <div className="id">{userId}</div>*/}
                {/*)}*/}

                {userInformationType === 'STUDENT' && (
                        <a href="/MyPage" className="btnMainItem">
                            <AiOutlineUser className="userBtn"/>
                        </a>
                )}

                {userInformationType === 'TEACHER' && (
                    <a href="/MyPage" className="btnMainItem">
                        <AiOutlineUser className="userBtn"/>
                    </a>
                )}

                {userInformationType === 'MANAGER' && (
                        <a href="/OperatorPage" className="btnMainItem">
                            <AiOutlineUser className="userBtn"/>
                        </a>
                )}
                {/*<a href="/OperatorPage"> <AiOutlineUser className="userBtn"/> </a>*/}
                <a href="/MyBasket"><RiShoppingCartLine className="cartBtn"/> </a>


            </div>
        </header>

    )
}

export default Header;