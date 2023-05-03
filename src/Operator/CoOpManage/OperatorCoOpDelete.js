import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";

const OperatorCoOpDelete=()=>{

    const OperatorCoOpDeleteContent =()=>{

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 삭제 페이지입니다.</h1>

            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpDeleteContent/>
        </Body>
    );
}

export default OperatorCoOpDelete;

