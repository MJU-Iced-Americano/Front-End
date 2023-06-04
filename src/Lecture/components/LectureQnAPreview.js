import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QnAPreview({courseIndex,lectIndex,index,question_title,question_content}) {
    const navigate = useNavigate();
    console.log(index);
    console.log(question_title);
    console.log(question_content);
    const[lectureAnswer,setLectureAnswer] = useState('');

    useEffect(() => {

        axios.get(`http://gateway.socoa.online:8000/lecture-service/lecture/question/${index}`)
            .then(response => {
                const dat = response.data.data;
                console.log(dat)
                if(dat.lectureQuestionReadDto.length !=0){
                    setLectureAnswer(dat.lectureQuestionReadDto.answer);
                }
            })
            .catch(error => {
                console.error(error);
            });


    }, []);

    const navigateToQnADetail = () => {
        navigate(`/LecturePage/${courseIndex}/${lectIndex}/question/detailpage/${index}`);
    };

    return(
        <div className="QnAGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">{question_title}</h3>
            <p className="DetailcontentPreview">{question_content}</p>
            <div>
                <p>{lectureAnswer}</p>
            </div>
        </div>
    );
}


export default QnAPreview;
