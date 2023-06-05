import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorQnADeleteService({faqIndex}) {

    const [error, setError] = useState(null);
    console.log(faqIndex);

    useEffect(()=>{

        const fetchQnA = async () => {
            try{
                setError(null);
                const response = await axios.delete(`http://gateway.socoa.online:8000/board-service/qna/delete/${faqIndex}`, {
                    headers: {
                        "Authorization" : ssoToken
                    }
                });
                console.log(response);
            }catch(e){
                setError(e);
                console.log(e.response.data);
            }
        };
        fetchQnA();
    }, []);

    if (error !== null && error.data !==null){
        return ( <div>
            <div>해당정보에 일치하는 고객의 정보가 없습니다.</div>
        </div>);
        ;
    }

    return(
        <div>
            <p>삭제가 완료되었습니다</p>
        </div>
    );
}

export default OperatorQnADeleteService;

