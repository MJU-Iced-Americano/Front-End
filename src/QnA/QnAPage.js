import React, {useEffect, useState} from 'react';
import './styles/QnAPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import QnAPreview from "./components/QnAPreview";
import Body from "../components/Body/Body";
import partner from "../assets/information/partner.JPG";
import axios from "axios";

const QnAPage=()=>{

    const QnAPageContent =()=> {
        //db연결/////////////////////////////////////
        const [data, setData] = useState([]);
        const [numberqna, setNumberQna] = useState('1');

        useEffect(() => {

            axios.get(`/board-service/question/show/listQnA`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    console.log(data.list.length);
                    const objects = [];
                    //나올수 있는 페이지 수 계산
                    setNumberQna(countpages(data.list.length));

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj= {
                            questionIndex: data.list[i].questionIndex,
                            questionTitle: data.list[i].questionTitle,
                            questionContent: data.list[i].questionContent,
                            updatedDay: data.list[i].updatedAt.substring(0,10),
                            updateTime : data.list[i].updatedAt.substring(11),
                            type: data.list[i].type,
                        }
                        console.log(obj);
                        objects.push(obj);
                    }
                    setData(objects);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        //나올수 있는 페이지 수 계산
        function countpages(count){
            let countpage = '0';
            if(count%10==0){
                countpage = Math.floor(count/10);
            }
            else{
                countpage = Math.floor(count/10) + 1;
            }
            console.log(countpage);
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
        };

        const handlePreviousPage = () => {
            navigateToPage(currentPage - 1);
        };

        const renderPageNumbers = (numberqna) => {
            console.log(numberqna);
            const pageNumbers = [];
            if(numberqna == 1){
                pageNumbers.push(1);
            }
            else if(numberqna<10){
                for (let i = 1; i <= numberqna; i++) {
                    pageNumbers.push(i);
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pageNumbers.push(i);
                }
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
                            <QnAPreview key={item.questionIndex} index={item.questionIndex} question_title={item.questionTitle}  question_content={item.questionContent} updateDate={item.updatedDay}  updateTime={item.updateTime} question_type={item.type}/>
                        ))}
                    </div>
                    <div className="PageNavigation">
                        {/*<button className="PageMove" disabled={currentPage === 1} onClick={handlePreviousPage}>이전 페이지</button>*/}
                        {renderPageNumbers(numberqna)}
                        {/*<button className="PageMove" disabled={currentPage === numberqna} onClick={handleNextPage}>다음 페이지</button>*/}
                    </div>
                    <button className="writebutton" onClick={navigateToWrite}>글쓰기</button>
                </div>
            </div>
        );
    }

    return(
        <Body>
            <QnAPageContent />
        </Body>
    );
}

export default QnAPage;

