import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";

const OperatorBanner=()=>{

    const OperatorBannerContent =()=>{
        const navigate = useNavigate();

        const addBannerPage = () => {
            navigate("/OperatorPage/BannerManage/Add");
        };
        const modifyBannerPage = () => {
            navigate("/OperatorPage/CoOpManage/Modify");
        };
        const deleteBannerPage = () => {
            navigate("/OperatorPage/CoOpManage/Delete");
        };

        return (
            <div className="CoOpManage">
                <h1>배너 관리 페이지입니다.</h1>
                <button className="CoOpManagebutton" onClick={addBannerPage}>배너 추가하기</button>
                <button className="CoOpManagebutton" onClick={modifyBannerPage}>배너 수정하기</button>
                <button className="CoOpManagebutton" onClick={deleteBannerPage}>배너 삭제하기</button>
            </div>
        );
    }

    return(
        <Body>
            <OperatorBannerContent/>
        </Body>
    );
}

export default OperatorBanner;

