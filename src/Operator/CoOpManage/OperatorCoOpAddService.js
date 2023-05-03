import React, {useEffect, useState} from 'react';
import axios from "axios";


const OperatorCoOpAddService=(co_company_name,co_company_url)=>{

    useEffect(()=>{
        const postCoOp = async () => {
            try{

                const response = await axios.post('http://localhost:8080/customer/custinfo/enrollment', {
                    co_company_name: co_company_name,
                    co_company_url: co_company_url
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

