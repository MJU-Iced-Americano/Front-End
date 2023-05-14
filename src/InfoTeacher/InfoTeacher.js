import React from "react";
import EdwardKim from "../assets/InfoTeacher/Kim.png";
import Class from "../assets/InfoTeacher/Class.jpg";
import lecture01 from "../assets/Banner/lecture01.png";
import kakao from "../assets/InfoTeacher/kakao.png";
import instagram from "../assets/InfoTeacher/instagram.png";
import facebook from "../assets/InfoTeacher/facebook.png";
import Body from "../components/Body/Body";
import './styles/InfoTeacher.css';
const InfoTeacher=() => {

    const InfoTeacherContent =()=>{
        return(
            <div className="whole">
                <h1 id="head">강사진 소개</h1>
                <hr id="line" />
                <div className="horizon">
                    <div className="profile">
                        <div className="imgDiv">
                            <img src={EdwardKim}/>
                            <h5>에드워드 킴</h5>
                            <div className="horizon">
                                <a href="/"><img src={kakao}/></a>
                                <a href="/"><img src={instagram}/></a>
                                <a href="/"><img src={facebook}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="careerAndNotice">
                        <div className="career">
                            <div>
                                <h3>학력 및 경력</h3>
                                <ul className="careerScroll">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JAVASCRIPT</li>
                                    <li>JAVA</li>
                                    <li>JSP</li>
                                    <li>ORACLE</li>
                                    <li>JAVASCRIPT</li>
                                    <li>JAVA</li>
                                    <li>JSP</li>
                                    <li>ORACLE</li>
                                    <li>JAVASCRIPT</li>
                                    <li>JAVA</li>
                                    <li>JSP</li>
                                    <li>ORACLE</li>
                                </ul>
                            </div>
                            <div className="imgDiv">
                                <img src={Class}/>
                            </div>
                        </div>
                        <div className="notice">
                            <h3>공지사항</h3>
                            <ul>
                                <li><a href="">공지사항 1</a></li>
                                <li><a href="">공지사항 1</a></li>
                                <li><a href="">공지사항 1</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="lecture">
                        <h3>강의 목록</h3>
                        <div className="lectureScroll">
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <Body>
            <InfoTeacherContent/>
        </Body>
    );

}

export default InfoTeacher;