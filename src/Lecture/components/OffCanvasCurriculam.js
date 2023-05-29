import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ReactPlayer from 'react-player/lazy';
import {Offcanvas} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {BsPlayCircle} from "react-icons/bs";
import "../styles/OffCanvasCurriculam.css"

function OffCanvasCurriculam({courseIndex, lectIndex, name, ...props}) {
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(lectIndex)

    useEffect(() => {

        axios.get(`http://54.180.213.187:8080/course-service/course/${courseIndex}`)
            .then(response => {
                const data = response.data.data;
                console.log(data);

                // const details = {
                //     courseIndex : data.courseIndex,
                //     category : data.category,
                //     courseName : data.courseName,
                //     price : data.price,
                //     courseDescription : data.courseDescription,
                //     difficulty : data.difficulty,
                //     courseTime : data.courseTime,
                //     // hits : data.hits, //강의 누적 조회수
                //     courseTitlePhotoUrl : data.courseTitlePhotoUrl,
                //     curriculumSum : data.curriculumSum,
                //     skillList : data.skillList, //배열..
                // }
                setDetail(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <button variant="primary" onClick={handleShow} className="LCurriButton">
                커리큘럼
            </button>
            <Offcanvas show={show} onHide={handleClose} {...props} style={{width:'800px'}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>커리큘럼 선택</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion className="accWhole" defaultActiveKey="0" flush>
                        {detail.curriculumReadDtoList && detail.curriculumReadDtoList.map((cur, i) => (

                            <Accordion.Item className="item" eventKey={i}>
                                <Accordion.Header className="chapter" >Chapter {i+1}. {cur.curriculumTitle}</Accordion.Header>
                                {cur.lectureReadDtos && cur.lectureReadDtos.map((lec, i) => (
                                    <Accordion.Body className="chapter_detail" key={i}>
                                        <div><BsPlayCircle/></div>
                                        <div className="lecture_title"><a href={`/LecturePage/${courseIndex}/${lec.lectureIndex}`}>{lec.lectureTitle}</a></div>
                                        <div className="time">{lec.lectureTime}</div>
                                    </Accordion.Body>
                                ))}

                            </Accordion.Item>
                        ))}
                    </Accordion>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasCurriculam;


