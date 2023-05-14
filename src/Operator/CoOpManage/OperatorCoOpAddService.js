import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({co_company_name,coCompany_photo_url,co_company_url}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const formData = new FormData();  // formData 생성

        console.log(co_company_name);
        console.log(co_company_url);
        formData.append('CoCompany_name', co_company_name);
        formData.append('CoCompany_url', co_company_url);
        formData.append('image', new Blob([JSON.stringify(coCompany_photo_url)], { type: "application/json" }));

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postCoOp = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                const response = await axios.post('/company-service/company/register', formData, config);
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

