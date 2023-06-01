import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorBannerDeleteService({bannerIndex}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    console.log(bannerIndex);


    useEffect(()=>{

        const fetchBanner = async () => {
            try{
                setError(null);
                const response = await axios.delete(`http://3.34.240.33:8080/board-service/banner/delete/${bannerIndex}`);
                console.log(response);
                setMessage(response.data.message);
            }catch(e){
                setError(e);
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        fetchBanner();
    }, []);

    if (error !== null && error.data !==null){
        return ( <div>
            <div>해당정보에 일치하는 배너의 정보가 없습니다.</div>
        </div>);
        ;
    }

    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorBannerDeleteService;

