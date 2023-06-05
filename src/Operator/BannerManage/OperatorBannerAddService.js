import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorBannerAddService({photo}) {
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(name.length, document.cookie.length);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const formData = new FormData();  // formData 생성

        formData.append('image', photo );

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postBanner = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "Content-type": "multipart/form-data",
                        "Authorization": ssoToken
                    }
                };
                const response = await axios.post('http://gateway.socoa.online:8080/board-service/banner/register', formData, config);
                console.log(response);
                setMessage(response.data.message);

            }catch(e){
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postBanner();
    }, []);


    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorBannerAddService;

