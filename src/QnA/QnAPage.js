import React, {useEffect, useState} from 'react';
import './styles/QnAPage.css';
import { useNavigate } from "react-router-dom";
import QnAPreview from "./components/QnAPreview";
import Body from "../components/Body/Body";
import partner from "../assets/information/partner.JPG";
import axios from "axios";

const QnAPage=()=>{

    const QnAPageContent =()=>{
        //db연결/////////////////////////////////////
        const [data, setData] = useState([]);
        const [numberqna, setNumberQna] = useState('0');

        useEffect(() => {

            axios.get(`/board-service/question/show/listQnA`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    const objects = [];
                    //나올수 있는 페이지 수 계산
                    setNumberQna(countpages(data.list.length));

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj = {
                            question_index: data.list[i].question_index,
                            question_content: data.list[i].question_content,
                            question_title: data.list[i].question_title,

                        };
                        console.log(obj)
                        objects.push(obj);
                    }
                    setData(objects);
                    // 배열에 저장된 객체를 출력
                    console.log(objects);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        //나올수 있는 페이지 수 계산
        function countpages(count){
            let countpage = '0';
            if(count%10==0){
                countpage = Math.floor(count);
            }
            else{
                countpage = Math.floor(count) + 1;
            }
            return countpage;
        }

        ////////////////////////////////////////////////////////

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
            console.log(25%7);
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
                        {data.map((item) => (
                            <QnAPreview index={item.question_index} question_title={item.question_title}  question_content={item.question_content} question_date={item.created_at} question_type={item.question_type}/>
                        ))}
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
                        <button className="PageMove" disabled={currentPage === numberqna} onClick={handleNextPage}>다음 페이지</button>
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

