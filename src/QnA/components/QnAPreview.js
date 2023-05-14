import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/QnAPage.css';

function QnAPreview(index,question_title,question_content,question_date,question_type) {
    const navigate = useNavigate();

    const navigateToQnADetail = () => {
        navigate(`/QnAPage/QnADetailPage/${index}`);
    };

    return(
        <div className="QnAGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">{question_type},{question_title}</h3>
            <p className="DetailcontentPreview">{question_content}</p>
            <div className="QnADetailDate">
                <p>{question_date}</p>
            </div>
        </div>
    );
}


export default QnAPreview;
