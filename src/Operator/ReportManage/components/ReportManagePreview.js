import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";

function ReportManagePreview({questionIndex,questionTitle,questionContent}) {
    const[type,setType] = useState('');
    const navigate = useNavigate();

    console.log(questionIndex);
    console.log(questionTitle);
    console.log(questionContent);

    const navigateToQnADetail = () => {
        navigate(`/OperatorPage/ReportManage/ReportQnA/${questionIndex}`);
    };

    return(
        <div className="QnAReportGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">{questionTitle}</h3>
            <p className="DetailcontentPreview">{questionContent}</p>
        </div>
    );
}


export default ReportManagePreview;
