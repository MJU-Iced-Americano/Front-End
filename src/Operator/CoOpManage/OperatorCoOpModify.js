import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";

const OperatorCoOpModify=()=>{

    const OperatorCoOpModifyContent =()=>{

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 수정 페이지입니다.</h1>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpModifyContent/>
        </Body>
    );
}

export default OperatorCoOpModify;

