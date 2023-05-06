import React, {useState} from 'react';
import './styles/QnAPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import QnAPreview from "./components/QnAPreview";
import Body from "../components/Body/Body";

const QnAPage=()=>{

    const QnAPageContent =()=>{
        const navigate = useNavigate();
        const [currentPage, setCurrentPage] = useState(1);

        const navigateToWrite = () => {
            navigate("/QnAPage/Question");
        };

        const navigateToPage = (page) => {
            navigate(`/QnAPage?page=${page}`);
            setCurrentPage(page);
        };

        const handleNextPage = () => {
            navigateToPage(currentPage + 1);
        };

        const handlePreviousPage = () => {
            navigateToPage(currentPage - 1);
        };

        const renderPageNumbers = () => {
            const pageNumbers = [];
            for (let i = 1; i <= 10; i++) {
                pageNumbers.push(i);
            }

            return pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => navigateToPage(number)}
                    className={currentPage === number ? "activePage" : "PageButton"}
                >
                    {number}
                </button>
            ));
        };

        return (
            <div>
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
                    <div className="PageNavigation">
                        <button className="PageMove" disabled={currentPage === 1} onClick={handlePreviousPage}>이전 페이지</button>
                        {renderPageNumbers()}
                        <button className="PageMove" disabled={currentPage === 10} onClick={handleNextPage}>다음 페이지</button>
                    </div>
                    <button className="writebutton" onClick={navigateToWrite}>글쓰기</button>
                </div>
            </div>
        );
    }

    return(
        <Body>
            <QnAPageContent/>
        </Body>
    );
}

export default QnAPage;

