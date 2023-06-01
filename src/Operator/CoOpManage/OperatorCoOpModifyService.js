import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpModifyService({companyIndex, companyName, companyPhoto, companyURL}) {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const formData = new FormData();

        formData.append('CoCompany_Index', companyIndex);
        formData.append('CoCompany_name', companyName);
        formData.append('CoCompany_url', companyURL);
        formData.append('image', new Blob([JSON.stringify(companyPhoto)], { type: "application/json" }));

        const postCoOp = async () => {
            try{
                setError(null);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };

                const response = await axios.post(`http://15.165.249.107:8080/company-service/company/modify/${companyIndex}`,formData, config);
                console.log(response);
                setMessage(response.data.message);
            }catch(e){
                setError(e);
                console.log(e.response.data);
                setMessage(e.response.data.message);
            }
        };
        postCoOp();
    }, []);

    if (error !== null && error.data !==null){
        return ( <div>
            <div>해당정보에 일치하는 협력사의 정보가 없습니다.</div>
        </div>);
        ;
    }

    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default OperatorCoOpModifyService;

