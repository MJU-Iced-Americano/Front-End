import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({CoCompany_name,image,CoCompany_url}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(name.length, document.cookie.length);

    useEffect(()=>{
        const formData = new FormData();  // formData 생성

        console.log(CoCompany_name);
        console.log(image);
        console.log(CoCompany_url);
        formData.append('CoCompany_name', CoCompany_name);
        formData.append('CoCompany_url', CoCompany_url);
        formData.append('image', image);

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postCoOp = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                        "Authorization": ssoToken
                    }
                };
                const response = await axios.post('http://gateway.socoa.online:8080/company-service/company/register', formData, config);
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

