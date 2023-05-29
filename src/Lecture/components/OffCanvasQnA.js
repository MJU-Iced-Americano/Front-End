import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Offcanvas} from "react-bootstrap";
import AddCourseQuestion from "./AddCourseQuestion";
import "../styles/OffCanvasQnA.css"

function OffCanvasQnA({ courseIndex, lectIndex, name, ...props }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [doEnroll, setDoEnroll] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [lectureQuestionTitle, setLectureQuestionTitle] = useState('');
    const [lectureQuestion, setLectureQuestion] = useState('');

    const handleTChange = (event) => {
        setLectureQuestionTitle(event.target.value);
    };
    const handleChange = (event) => {
        setLectureQuestion(event.target.value);
    };

    const navigateQuestion = () => {
        navigate(`/LecturePage/${courseIndex}/${lectIndex}/question`);
    };
    function btnTextChanger(){
        if (doEnroll) {
            return "확인";
        }
        else return "등록하기";
    }

    return (
        <>
            <button variant="primary" onClick={handleShow} className="LQuestionButton">
                질문&답변
            </button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >질문&답변</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div >
                            <h4 className="LQuestion_title">질문제목</h4>
                            <input
                                onChange={handleTChange}
                                className="LQuestionTitle"
                                placeholder="질문제목을 입력해주세요"
                                value={lectureQuestionTitle}
                            />
                        </div>
                        <div>
                            <h4 className="LQuestion_title">질문내용</h4>
                            <textarea
                                onChange={handleChange}
                                className="LQuestion"
                                placeholder="질문내용을 입력해주세요"
                                value={lectureQuestion}
                            />
                        </div>
                        <div>
                            <button className="LQuestionButton" onClick={()=> setDoEnroll(!doEnroll)}>{btnTextChanger()}</button>
                            <button className="LQuestionButton" onClick={navigateQuestion}>질문 보기</button>
                        </div>
                        {doEnroll===true?<AddCourseQuestion lectIndex={lectIndex} QuestionTitle={lectureQuestionTitle} Question={lectureQuestion}/>:<p></p>}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default OffCanvasQnA;

