import Body from "../components/Body/Body";
import React from "react";
import lecture01 from "../assets/Banner/lecture01.png";
import EdwardKim from "../assets/InfoTeacher/Kim.png";
import './styles/InfoTearcherList.css';

const InfoTeacherList =()=> {

    const InfoTeacherListContent=()=>{
        return(
            <div className="whole">
                <h1>강사진 목록</h1>
                <hr />
            <div className="TeacherScroll">
                    <div className="teacher-Tile">
                        <a href='/InfoTeacher'><img src={EdwardKim} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
                    <div className="teacher-Tile">
                        <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                        <h5>에드워드 킴</h5>
                    </div>
            </div>
            </div>
        );
    }

    return(
        <Body>
            <InfoTeacherListContent/>
        </Body>
    );
}

export default InfoTeacherList;