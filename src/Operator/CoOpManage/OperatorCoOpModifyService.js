import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpModifyService({companyIndex, companyName, companyURL}) {

    const [error, setError] = useState(null);

    useEffect(()=>{

        const postCoOp = async () => {
            try{
                setError(null);
                const response = await axios.delete(`/company-service/company/modify/${companyIndex}`,{
                    company_index: companyIndex,
                    CoCompany_name: companyName,
                    CoCompany_url: companyURL
                });
                console.log(response);
            }catch(e){
                setError(e);
                console.log(e.response.data);
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
            <p>수정이 완료되었습니다</p>
        </div>
    );
}

export default OperatorCoOpModifyService;

