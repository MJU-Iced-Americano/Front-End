import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../components/Body/Body";
import "./styles/OperatorMain.css"

const OperatorMain=()=>{
    const navigate = useNavigate();

    const OperatorMainContent =()=>{

        const handleCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage");
        };

        const handleFAQPage = () => {
            navigate("/OperatorPage/OperatorFAQList");
        };

        const handleQnAPage = () => {
            navigate("/OperatorPage/QnAManage");
        };

        return (
            <div className="Operatormain">
                <h1>운영자 페이지입니다.</h1>
                <button className="Operatorbutton" onClick={handleCoOpPage}>회사 협력사</button>
                <button className="Operatorbutton" onClick={handleFAQPage}>FAQ</button>
                <button className="Operatorbutton" onClick={handleQnAPage}>QnA</button>
            </div>
        );
    }

    return(
        <Body>
            <OperatorMainContent/>
        </Body>
    );
}

export default OperatorMain;

