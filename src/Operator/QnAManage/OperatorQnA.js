import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorQnA.css"

const OperatorCoOp=()=>{

    const OperatorCoOpContent =()=>{
        const navigate = useNavigate();


        const deleteQnAPage = () => {
            navigate("/OperatorPage/QnAManage/Delete");
        };

        return (
            <div className="QnAManage">
                <h1>QnA 관리 페이지입니다.</h1>
                <button className="QnAManagebutton" onClick={deleteQnAPage}>QnA 삭제하기</button>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpContent/>
        </Body>
    );
}

export default OperatorCoOp;

