import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorReport.css"

const OperatorReport=()=>{

    const OperatorReportContent =()=>{
        const navigate = useNavigate();

        const ReportQnAPage = () => {
            navigate("/OperatorPage/ReportManage/ReportQnA");
        };
        const ReportCommendPage = () => {
            navigate("/OperatorPage/ReportManage/ReportCommend");
        };

        return (
            <div className="ReportManage">
                <h1>신고 관리 페이지입니다.</h1>
                <button className="ReportManagebutton" onClick={ReportQnAPage}>게시글 신고목록</button>
                <button className="ReportManagebutton" onClick={ReportCommendPage}>코멘트 신고목록</button>
            </div>
        );
    }

    return(
        <Body>
            <OperatorReportContent/>
        </Body>
    );
}

export default OperatorReport;

