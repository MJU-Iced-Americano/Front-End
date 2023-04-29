import React from 'react';
import './styles/QnAPage.css';
import { useNavigate } from "react-router-dom";
import QnAPreview from "./components/QnAPreview";
import Body from "../components/Body/Body";

function QnAPage(){
    const navigate = useNavigate();

    const navigateToWrite = () => {
        navigate("/QnAPage/Question");
    };

    const QnAPageContent=()=>{
        return(
            <div className="whole">
                <div className="QnAName">
                    <h1>질문 & 답변</h1>
                </div>
                <div className="search_wrapperQnA">
                    <input className="search_bar" type="text" placeholder = "게시물 제목을 검색해보세요"></input>
                </div>
                <div className="QnAList">
                    <QnAPreview />
                    <QnAPreview />
                    <QnAPreview />
                    <QnAPreview />
                    <QnAPreview />
                    <QnAPreview />
                    <QnAPreview />
                </div>
                <button className="writebutton" onClick={navigateToWrite}>글쓰기</button>
            </div>
        );
    }

    return (
        <Body>
            <QnAPageContent/>
        </Body>
    );
}

export default QnAPage;

