import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({course_index, chapter, lecture_sequence, lectIndex, QuestionTitle,Question}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const lectureQuestionDto = {
        userId : '1',
        lectureQuestionTitle : QuestionTitle,
        lectureQuestion:Question
    };



    useEffect(()=>{

        console.log(lectureQuestionDto);
        const formData = new FormData();  // formData 생성

        // formData.append('images', new Blob([JSON.stringify('')], { type: "application/json" }));
        formData.append('lectureQuestionDto', new Blob([JSON.stringify(lectureQuestionDto)], { type: "application/json" }));

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postCQ = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                const response = await axios.post(`http://gateway.socoa.online:8000/lecture-service/lecture/${lectIndex}/question`, formData, config);
                console.log(response);
                setMessage(response.data.message);

            }catch(e){
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postCQ();
    }, []);


    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorCoOpAddService;

