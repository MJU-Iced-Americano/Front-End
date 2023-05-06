import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";

const OperatorCoOp=()=>{

    const OperatorCoOpContent =()=>{
        const navigate = useNavigate();

        const addCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Add");
        };
        const modifyCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Modify");
        };
        const deleteCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Delete");
        };

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 관리 페이지입니다.</h1>
                <button className="CoOpManagebutton" onClick={addCoOpPage}>회사 협력사 추가하기</button>
                <button className="CoOpManagebutton" onClick={modifyCoOpPage}>회사 협력사 수정하기</button>
                <button className="CoOpManagebutton" onClick={deleteCoOpPage}>회사 협력사 삭제하기</button>
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

