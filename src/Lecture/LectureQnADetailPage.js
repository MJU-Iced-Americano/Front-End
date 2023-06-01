import React, {useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Body from "../components/Body/Body";
import AddAnswer from "./components/AddAnswer";
import "./styles/LectureQnADetailPage.css"

const LectureQnADetailPage =() => {
    const location = useLocation();
    console.log(location);
    const params = location.pathname.split('/'); // 경로를 '/'로 분할하여 배열로 만듦
    const value = params[2];
    console.log(value);
    const index = params[3];
    console.log(index);
    const qindex = params[6];
    console.log(qindex);

    const LectureQnADetailPageContent =({courseIndex,lectIndex,qIndex}) => {

        console.log(qIndex)
        const[lectureQuestionTitle,setLectureQuestionTitle] = useState('');
        const[lectureQuestion,setLectureQuestion] = useState('');
        const[time,setTime] = useState('');

        useEffect(() => {
            axios.get(`http://54.180.213.187:8080/lecture-service/lecture/question/${qIndex}`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    const dat = response.data.data;
                    console.log(dat)
                    console.log(dat.lectureQuestionReadDto.lectureQuestionTitle)
                    console.log(dat.lectureQuestionReadDto.lectureQuestion)
                    setLectureQuestionTitle(dat.lectureQuestionReadDto.lectureQuestionTitle);
                    setLectureQuestion(dat.lectureQuestionReadDto.lectureQuestion);

                })
                .catch(error => {
                    console.error(error);
                });

        }, []);

        const [doEnroll, setDoEnroll] = useState(false);
        const[answer,setAnswer] = useState('');

        const handleChange = (event) => {
            setAnswer(event.target.value);
        };
        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "등록하기";
        }


        return(
            <div>
                <div className="QuestionDetailCheck">
                    <h2>{lectureQuestionTitle}</h2>
                    <h4>{lectureQuestion}</h4>
                </div>
                <div>
                    <h4>답변달기</h4>
                    <textarea
                        onChange={handleChange}
                        className="QQuestion"
                        placeholder="답변을 입력해주세요"
                        value={answer}
                    />
                    <div>
                    <button className="LQuestionButton" onClick={()=> setDoEnroll(!doEnroll)}>{btnTextChanger()}</button>
                    {doEnroll===true?<AddAnswer qIndex={qIndex} Answer={answer}/>:<p></p>}
                    </div>
                </div>
            </div>
        );
    }


    return (
        <Body>
            <LectureQnADetailPageContent courseIndex={value} lectIndex={index} qIndex={qindex}/>
        </Body>
    );
}

export default LectureQnADetailPage;

