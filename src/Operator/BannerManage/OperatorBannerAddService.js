import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorBannerAddService({imageUrl}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const formData = new FormData();  // formData 생성

        formData.append('image',  new Blob([JSON.stringify(imageUrl)], { type: "application/json" }));

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        const postBanner = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "Content-type": "multipart/form-data"
                    }
                };
                const response = await axios.post('http://3.34.240.33:8080/board-service/banner/register', formData, config);
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

