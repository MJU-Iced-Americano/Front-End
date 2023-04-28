import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EdwardKim from "../assets/InfoTeacher/EdwardKim.jpg";
import Class from "../assets/InfoTeacher/Class.jpg";
import Lecture from "../assets/InfoTeacher/lecture01.png";
// import '../styles/reset.css';
import './styles/InfoTeacher.css';
import lecture01 from "../assets/Banner/lecture01.png";
import Body from "../components/Body/Body";
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
                            <h3>에드워드 킴</h3>
                        </div>
                    </div>
                    <div className="careerAndNotice">
                        <div className="career">
                            <h3>학력 및 경력</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>JAVA</li>
                                <li>JSP</li>
                                <li>ORACLE</li>
                            </ul>
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