import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/OperatorReport.css"

function ReportCommendManagePreview({commendIndex,questionIndex,commendContent}) {
    const[type,setType] = useState('');
    const navigate = useNavigate();

    console.log(commendIndex);
    console.log(questionIndex);
    console.log(commendContent);

    const navigateToCommendDetail = () => {
        navigate(`/OperatorPage/ReportManage/ReportCommend/${commendIndex}`);
    };

    return(
        <div className="CommendGoDetail" onClick={navigateToCommendDetail}>
            <p className="DetailcommendcontentPreview">{commendContent}</p>
        </div>
    );
}


export default ReportCommendManagePreview;
