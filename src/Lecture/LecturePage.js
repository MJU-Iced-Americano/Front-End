import React, {useEffect, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LecturePage.css"

const LecturePage=()=>{

    const LecturePageContent =()=> {


        return (
            <div className="LectureContent">
                <p>강의 시청페이지입니당</p>
            </div>
        );
    }

    return(
        <Body>
            <LecturePageContent />
        </Body>
    );
}

export default LecturePage;

