import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpAddService({co_company_name,co_company_url}) {

    const [error, setError] = useState(null);
    console.log(co_company_name);

    useEffect(()=>{

        const postCoOp = async () => {
            try{
                setError(null);
                const response = await axios.post('/company-service/company/register', {
                    CoCompany_name: co_company_name,
                    CoCompany_url: co_company_url
                });
                console.log(response);
            }catch(e){
                console.log(e.response.data);
            }
        };
        postCoOp();
    }, []);


    return(
        <div>
            <p>등록이 완료되었습니다</p>
        </div>
    );
}

export default OperatorCoOpAddService;

