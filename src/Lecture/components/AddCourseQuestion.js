import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({lectIndex, QuestionTitle,Question}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const [lectureQuestionDto, setLectureQuestionDto] = useState({
        lectureQuestionTitle : QuestionTitle,
        lectureQuestion:Question
    });

    const {lectureQuestionTitle, lectureQuestion} = lectureQuestionDto;


    useEffect(()=>{

        const formData = new FormData();  // formData 생성

        // formData.append('lectureQuestionDto', co_company_name);

        const postCoOp = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                const response = await axios.post(`http://54.180.213.187:8080/lecture-service/lecture/${lectIndex}`, formData, config);
                console.log(response);
                setMessage(response.data.message);

            }catch(e){
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postCoOp();
    }, []);


    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorCoOpAddService;

