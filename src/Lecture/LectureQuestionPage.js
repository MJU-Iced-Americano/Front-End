import React, {useEffect, useRef, useState} from 'react';
import Body from "../components/Body/Body";
import "./styles/LectureQuestionPage.css"
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import LectureQnAPreview from "./components/LectureQnAPreview";

const LectureQuestionPage=()=>{

    const location = useLocation();
    console.log(location);
    const params = location.pathname.split('/'); // 경로를 '/'로 분할하여 배열로 만듦
    const value = params[2];
    console.log(value);
    const index = params[3];
    console.log(index);

    const LectureQuestionPageContent =({courseIndex, lectIndex})=> {
        const names = 'SOCOA-SSO-TOKEN=';
        const ssoToken =  "Bearer "+document.cookie.substring(names.length, document.cookie.length);
        const [data, setData] = useState([]);

        ///////////////////////////////////////
        useEffect(() => {

            axios.get(`http://gateway.socoa.online:8000/lecture-service/lecture/${lectIndex}/question`,{
                // withCredentials:true,
                headers : {
                    "Authorization" : ssoToken
                }
            })
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data);
                    const data = response.data.data;
                    console.log(data);
                    const objects = [];

                    for (let i = 0; i < data.content.length; i++) {
                        const obj = {
                            lectureQuestionIndex: data.content[i].lectureQuestionIndex,
                            lectureQuestionTitle: data.content[i].lectureQuestionTitle,
                            lectureQuestion: data.content[i].lectureQuestion,
                            createdAt: data.content[i].createdAt,
                            hits: data.content[i].hits
                        };
                        console.log(obj)
                        objects.push(obj);
                    }
                    setData(objects);

                })
                .catch(error => {
                    console.error(error);
                });


        }, []);
        ///////////////////////////////////////

        return (
            <div className="LQ-Content">
                <div>
                    <h4>강의 질문 목록</h4>
                </div>
                {data.map((item) => (
                    <div className="LQOne">
                        <LectureQnAPreview key={item.lectureQuestionIndex} courseIndex={courseIndex} lectIndex={lectIndex} index={item.lectureQuestionIndex} question_title={item.lectureQuestionTitle}  question_content={item.lectureQuestion}/>
                    </div>
                ))}
            </div>
        );
    }

    return(
        <Body>
            <LectureQuestionPageContent courseIndex={value} lectIndex={index}/>
        </Body>
    );
}

export default LectureQuestionPage;

