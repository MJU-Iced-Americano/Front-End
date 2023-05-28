import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Offcanvas} from "react-bootstrap";
import AddCourseQuestion from "./AddCourseQuestion";

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
        // navigate(`/QnAPage/QnADetailPage/${index}`);
    };
    function btnTextChanger(){
        if (doEnroll) {
            return "확인";
        }
        else return "등록하기";
    }

    return (
        <>
            <button variant="primary" onClick={handleShow} className="me-2">
                질문과 답변
            </button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>질문과 답변</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <input
                            onChange={handleTChange}
                            className="Chatting"
                            placeholder="질문제목을 입력해주세요"
                            value={lectureQuestionTitle}
                        />
                        <textarea
                            onChange={handleChange}
                            className="Chatting"
                            placeholder="질문내용을 입력해주세요"
                            value={lectureQuestion}
                        />
                        <button onClick={()=> setDoEnroll(!doEnroll)}>{btnTextChanger()}</button>
                        {doEnroll===true?<AddCourseQuestion lectIndex={lectIndex} QuestionTitle={lectureQuestionTitle} Question={lectureQuestion}/>:<p></p>}
                        <div>
                            <button onClieck={navigateQuestion}>질문 확인하기</button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default OffCanvasQnA;

