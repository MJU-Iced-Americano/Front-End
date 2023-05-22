import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LectureRegistPage.css"
import axios from "axios";
import LectureRegistService from "./LectureRegistService";

const LectureRegistPage=()=>{

    const LectureRegistPageContent =(course_index, chapter, lecture_sequence)=> {
        const [doEnroll, setDoEnroll] = useState(false);
        const inputRef = useRef(null);
        const [inputs, setInputs] = useState({
            lectureTitle : '',
            lectureDescription:'',
            videoURL : ''
        });

        const {lectureTitle, lectureDescription, videoURL} = inputs;



        const handleButtonClick = () => {
            inputRef.current.click();
        };


        const onChange =(e) => {
            const{value, name} = e.target;
            setInputs({
                ...inputs,
                [name] : value
            })
        }

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "등록하기";
        }

        return (
            <div className="LectureRegistContent">
                <h1>강의등록페이지</h1>
                <input name="lectureTitle" placeholder="강의 제목을 적으시오" onChange={onChange} value={lectureTitle} className="inputLectureInfo" type='text'/>
                <input name="lectureDescription" placeholder="강의 설명을 적으시오" onChange={onChange} value={lectureDescription} className="inputLectureInfo" type='text'/>
                {/*<button onClick={handleButtonClick}>비디오 선택</button>*/}
                <input name="videoURL" ref={inputRef} type="file" accept="video/*" value={videoURL} onChange={onChange} className="inputLectureInfo"/>
                <button  className="inLectureButton" onClick={()=> setDoEnroll(!doEnroll)}>{btnTextChanger()}</button>
                {doEnroll===true?<LectureRegistService lectureTitle={lectureTitle} lectureDescription={lectureDescription} videoURL={videoURL}/>:<p></p>}
            </div>
        );
    }

    return(
        <Body>
            <LectureRegistPageContent />
        </Body>
    );
}

export default LectureRegistPage;

