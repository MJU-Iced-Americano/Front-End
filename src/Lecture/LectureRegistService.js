import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LectureRegistPage.css"
import axios from "axios";
import OperatorcoOpAddService from "../Operator/CoOpManage/OperatorCoOpAddService";

function LectureRegistService({course_index, chapter, lecture_sequence, lectureTitle, lectureDescription, video}){
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const postLectureDto = {
        lectureTitle, lectureDescription
    };
    console.log(postLectureDto)

    useEffect(() => {
        console.log(lectureTitle)
        console.log(lectureDescription)
        const formData = new FormData();  // formData 생성

        formData.append('postLectureDto',new Blob([JSON.stringify(postLectureDto)], { type: "application/json" }));
        formData.append('video', video);

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postLecture = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                const response = await  axios.post(`http://54.180.213.187:8080/lecture-service/lecture/manage/new-lecture/1/3/1`, formData, config);
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

