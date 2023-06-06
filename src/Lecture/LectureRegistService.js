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
                        "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0SFdqMnVlM283X2FOVDUzSE5yUjVnTW9NZUJwUjZLeGRwdWtPRk5DZXYwIn0.eyJleHAiOjE2ODYwNTg2MjUsImlhdCI6MTY4NjA1ODU2NSwiYXV0aF90aW1lIjoxNjg2MDU4NTY1LCJqdGkiOiIxYmNiYzlmYi1jNDIyLTRiZDEtYTFjYy1hMzg4MWQ1MGUyNjkiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6MzU2ODNkYjUtOGE4ZC00M2M0LThkNmYtN2I5ZWE1YTZiNWM1OmJiZmJkMmVmLWU3ODctNGJlYS05NDczLTY4MTQ1OWE2ZGE4NSIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6IjU4YmM0MWRlLWY3NjAtNDZhYy1hM2E0LTQwYzE0Mzg4ODRiMiIsImF0X2hhc2giOiI2OTBzTXByUFlfeURsbTlJcU0tTlV3IiwiYWNyIjoiMSIsInNpZCI6IjU4YmM0MWRlLWY3NjAtNDZhYy1hM2E0LTQwYzE0Mzg4ODRiMiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5pY2tuYW1lIjoibmFkbyIsInByZWZlcnJlZF91c2VybmFtZSI6InRlYWNoZXIxIiwiZW1haWwiOiJ0ZWFjaGVyMUBnbWFpbC5jb20ifQ.UbVn7ODII2wt30-EpdNDBFss66igQ-DHBIrQKWqfgZefKLmEyuqDPa2JKpl_ZgBOgMDT8ymrahT0-EZa5cSkk0mhKkn64dR50PBnmVFb1an5IwwLQZ6kac4FYx910tNdCXCT_JTcRLedIv2MwkmJpFpejusHPqLt101zpCYXZJzBopbANtvtT1900WzaGvGuthsbqyDZ01WjDR91bqcKlFr72SP0Dei8woLA5r0tSPOE80gp7Zgkb2uz1fEho4WZSp7RhwA_e5vD1yi3eMW0lpfifkeDpeXAh04S0uJQkIvHW0JXql7-axKr8o52CcxpesfSwIqxpTd3VKXcccMqrQ"
                    }
                };

                //코스인덱스,챕터,강의번호
                const response = await  axios.post(`http://gateway.socoa.online:8000/lecture-service/lecture/manage/new-lecture/10/1/3`, formData, config);
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

