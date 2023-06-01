import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({qIndex, Answer}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const answerCreateDto = {
        userId : 1,
        answer : Answer
    };



    useEffect(()=>{

        console.log(answerCreateDto);
        const formData = new FormData();  // formData 생성

        // formData.append('images', '');
        formData.append('answerCreateDto', new Blob([JSON.stringify(answerCreateDto)], { type: "application/json" }));

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postAnswer = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                const response = await axios.post(`http://54.180.213.187:8080/lecture-service/lecture/${qIndex}/answer`, formData, config);
                console.log(response);
                setMessage(response.data.message);

            }catch(e){
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postAnswer();
    }, []);


    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorCoOpAddService;

