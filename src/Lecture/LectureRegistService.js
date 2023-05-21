import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LectureRegistPage.css"
import axios from "axios";
import OperatorcoOpAddService from "../Operator/CoOpManage/OperatorCoOpAddService";

function LectureRegistService({lectureTitle, lectureDescription, videoURL}){
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    console.log(lectureTitle)
    console.log(lectureDescription)
    console.log(videoURL)

    const [postLectureDto, setPostLectureDto] = useState({
        lectureTitle : `${lectureTitle}`,
        lectureDescription:`${lectureDescription}`
    });

    useEffect(() => {
        console.log(postLectureDto)
        console.log(videoURL)

        const postLecture = async () => {
            try{
                setError(null);

                const response = await  axios.post(`http://54.180.213.187:8080/lecture-service/lecture/manage/new-lecture/1/1/2`,{
                    postLectureDto: `${postLectureDto}`,
                    video: `${videoURL}`
                });
                setMessage(response.data.message);
                console.log(response);

            }catch(e){
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postLecture();
    }, []);

    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default LectureRegistService;

