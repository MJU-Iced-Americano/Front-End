import React from 'react';
import './styles/QnAPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import QnAPreview from "./components/QnAPreview";




function QnAPage(){
    const navigate = useNavigate();


    const navigateToWrite = () => {
        navigate("/QnAPage/Question");
    };

    return (
        <div>
            <Header />
            <div className="whole">
                <div className="QnAName">
                    <h1>질문 & 답변</h1>
                </div>
                <div className="search_wrapperQnA">
                    <input className="search_bar" type="text" placeholder = "게시물 제목을 검색해보세요"></input>
                    <button className="writebutton" onClick={navigateToWrite}>글쓰기</button>
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
            </div>
            <Footer/>
        </div>
    );
}

export default QnAPage;

