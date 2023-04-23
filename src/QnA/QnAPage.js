import React from 'react';
import './styles/QnAPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";




function QnAPage(){
    const navigate = useNavigate();

    const navigateToQnADetail = () => {
        navigate("/RegularFAQ");
    };

    return (
        <div>
            <Header />
            <div className="whole">
                <div className="QnAName">
                    <h1>질문 & 답변</h1>
                </div>
                <div className="search_wrapperQnA">
                    <input className="search_bar" type="text" placeholder = "게시물을 검색해보세요"></input>
                    <button className="writebutton">글쓰기</button>
                </div>
                <div className="QnAList">
                    <div className="QnAGoDetail" onClick={navigateToQnADetail}>
                        <h3 className="DetailNamePreview">제목</h3>
                        <p className="DetailcontentPreview">안녕하세요 저는 전민근입니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다.</p>
                        <div className="QnADetailDate">
                            <p>2022.11.11</p>
                        </div>
                    </div>
                    <div className="QnAGoDetail">
                        <h3 className="DetailNamePreview">제목</h3>
                        <p>안녕하세요 저는 전민근입니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다.</p>
                        <div className="QnADetailDate">
                            <p>2022.11.11</p>
                        </div>
                    </div>
                    <div className="QnAGoDetail">
                        <h3 className="DetailNamePreview">제목</h3>
                        <p>안녕하세요 저는 전민근입니다. 어떻게 사용하는지 몰라 질문게시판 남깁니다.</p>
                        <div className="QnADetailDate">
                            <p>2022.11.11</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default QnAPage;

