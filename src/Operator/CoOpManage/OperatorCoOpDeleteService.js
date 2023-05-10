import React, {useEffect, useState} from 'react';
import axios from "axios";


function OperatorCoOpDeleteService({companyIndex}) {

    const [error, setError] = useState(null);
    console.log(companyIndex);


    useEffect(()=>{

        const fetchCoOp = async () => {
            try{
                setError(null);
                const response = await axios.delete(`/company-service/company/delete/${companyIndex}`);
                console.log(response);
            }catch(e){
                setError(e);
                console.log(e.response.data);
            }
        };
        fetchCoOp();
    }, []);

    if (error !== null && error.data !==null){
        return ( <div>
            <div>해당정보에 일치하는 협력사의 정보가 없습니다.</div>
        </div>);
        ;
    }

    return(
        <div>
            <p>삭제가 완료되었습니다</p>
        </div>
    );
}

export default OperatorCoOpDeleteService;

