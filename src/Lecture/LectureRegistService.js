import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LectureRegistPage.css"
import axios from "axios";
import OperatorcoOpAddService from "../Operator/CoOpManage/OperatorCoOpAddService";

function LectureRegistService({course_index, chapter, lecture_sequence, lectureTitle, lectureDescription, lectureTime, video}){
    const names = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(names.length, document.cookie.length);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const postLectureDto = {
        lectureTitle, lectureDescription, lectureTime
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
                        "content-type": "multipart/form-data",
                        "Authorization" : ssoToken
                    }
                };

                //코스인덱스,챕터,강의번호
                const response = await  axios.post(`http://gateway.socoa.online:8000/lecture-service/lecture/manage/new-lecture/10/2/1`, formData, config);
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

