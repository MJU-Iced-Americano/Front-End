import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../components/Body/Body";

const OperatorMain=()=>{
    const navigate = useNavigate();

    const OperatorMainContent =()=>{

        const handleCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage");
        };

        return (
            <div className="Operatormain">
            <button className="Operatorbutton" onClick={handleCoOpPage}>회사 협력사</button>
            <button className="Operatorbutton">FAQ</button>
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

