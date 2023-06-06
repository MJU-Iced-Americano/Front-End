import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LecturePage.css"
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import ReactPlayer from 'react-player/lazy';
import {Offcanvas} from "react-bootstrap";
import OffCanvasCurriculam from "./components/OffCanvasCurriculam";
import OffCanvasQnA from "./components/OffCanvasQnA";

const LecturePage=()=>{
    const location = useLocation();
    console.log(location);
    const params = location.pathname.split('/'); // 경로를 '/'로 분할하여 배열로 만듦
    const value = params[2];
    console.log(value);
    const index = params[3];
    console.log(index);


    const LecturePageContent =({courseIndex, lectIndex})=> {
        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken =  "Bearer " + document.cookie.substring(name.length, document.cookie.length);

        console.log(lectIndex);
        const navigate = useNavigate();
        const [lectureTitles, setLectureTitles] = useState(null);
        const [lectureDescriptions, setLectureDescriptions] = useState(null);
        const [lectureURLs, setLectureURLs] = useState(null);


        useEffect(() => {

            axios.get(`http://gateway.socoa.online:8000/lecture-service/lecture/${lectIndex}?tab=basic`,{
                // withCredentials:true,
                headers : {
                    "Authorization" : ssoToken
                }
            })
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data);
                    const data = response.data.data;
                    setLectureTitles(data.lectureTitle);
                    setLectureDescriptions(data.lectureDescription);
                    setLectureURLs(data.lectureUrl);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);


        const navigateRegist = () => {
            navigate("/LectureRegistPage");
        };

        ///////////////////////////////////////

        return (
            <div className="LectureContent">
                <div className="VideoInfo">
                    <div  className="VideoInfoChild1">
                        {['start'].map((placement, idx) => (
                            <OffCanvasCurriculam courseIndex={courseIndex} lectIndex={lectIndex} key={idx} placement={placement} name={placement} />
                        ))}
                    </div>
                    <div  className="VideoInfoChild2">
                        <h1>{lectureTitles}</h1>
                        <h3>{lectureDescriptions}</h3>
                    </div>
                    <div  className="VideoInfoChild3">
                        {['end'].map((placement, idx) => (
                            <OffCanvasQnA courseIndex={courseIndex} lectIndex={lectIndex} key={idx} placement={placement} name={placement} />
                        ))}
                    </div>
                </div>
                <div className="VideoDiv">
                    <div>
                        <ReactPlayer
                            className="Video"
                            width='100%'
                            height='990px'
                            margin='auto'
                            display='flex'
                            playing={true}
                            muted={true}
                            controls={true}
                            url={lectureURLs}
                        />
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        );
    }

    return(
        <Body>
            <LecturePageContent courseIndex={value} lectIndex={index}/>
        </Body>
    );
}

export default LecturePage;

