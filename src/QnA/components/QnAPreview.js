import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/QnAPage.css';

function QnAPreview() {
    const navigate = useNavigate();

    const navigateToQnADetail = () => {
        navigate("/RegularFAQ");
    };

    return(
        <div className="QnAGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">제목</h3>
            <p className="DetailcontentPreview">안녕하세요 저는 전민근입니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다.</p>
            <div className="QnADetailDate">
                <p>2022.11.11</p>
            </div>
        </div>
    );
}


export default QnAPreview;
