import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LecturePage.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ReactPlayer from 'react-player/lazy';

const LecturePage=()=>{

    const LecturePageContent =()=> {
        const videoRef = useRef(null);
        const playerRef = useRef(null);
        const navigate = useNavigate();
        const [lectureTitles, setLectureTitles] = useState(null);
        const [lectureDescriptions, setLectureDescriptions] = useState(null);
        const [lectureURLs, setLectureURLs] = useState(null);


        useEffect(() => {

            axios.get(`http://54.180.213.187:8080/lecture-service/lecture/6?tab=basic`)
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

        return (
            <div className="LectureContent">
                <button onClick={navigateRegist}>dd</button>
                <div className="VideoInfo">
                    <h1>{lectureTitles}</h1>
                    <h3>{lectureDescriptions}</h3>
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

                </div>
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

