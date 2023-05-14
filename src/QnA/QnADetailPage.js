import React, {useEffect, useState} from 'react';
import './styles/QnADetailPage.css';
import image from "../assets/Footer/socoa-ver2.png"
import good from "../assets/QnA/Good.png"
import Body from "../components/Body/Body";
import nogood from "../assets/QnA/NoGood.png"
import report from "../assets/QnA/Report.png"
import axios from "axios";
import ModalButton from "./components/ModalButton"
import ModalChatButton from "./components/ModalChatButton";
import {useParams} from "react-router-dom";

function QnADetailPage({title, date, imageURL, content, chat}){

    //db연결/////////////////////////////////////
    const {index} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`/board-service/question/show/${index}`)
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const data = response.data;

            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    ////////////////////////////////////////////////////////
    const [qna, setQnA] = useState(null);
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);
    const [goods, setGoods] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [goodChats, setGoodChats] = useState([]);
    const [reportChats, setReportChats] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const GoodChats = (chatIndex) => {
        GoodChat(chatIndex);
    }
    const ReportChats = (chatIndex) => {
        ReportChat(chatIndex);
    }


    const GoodChat = (chatIndex) => {
        if( goodChats[chatIndex]){
            console.log("return");
            return;
        }
        goodChats[chatIndex] = true;
        setGoodChats([...goodChats]);
    };

    const ReportChat = (chatIndex) => {
        if( reportChats[chatIndex]){
            console.log("return");
            return;
        }
        reportChats[chatIndex] = true;
        setReportChats([...reportChats]);
    };

    const Good = () => {
        if(isClicked){
            return;
        }
        setIsClicked(true);
        setCount(count + 1);
        setGoods(true);
    };

    const ChatRegister = () => {
        if (text.trim() !== '') {
            setChats([...chats, text]);
            setGoodChats([...goodChats, false]);
            setText('');
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const QnADetailPageContent=()=> {
        return(
            <div className="Detailframe">
                <div className="DetailMain">
                    <div className="DetailHeader">
                        <h1 className="DetailName">[{data.question_type}]{data.question_title}제목</h1>
                        <p className="DetailInfo">{data.created_at}관리자, 등록날, 조회수</p>
                    </div>
                    <div className="DetailContent">
                        {/*{imageURL && <img src={imageURL} alt="post"/>}*/}
                        {/*{image && <img src={image} className="DetailImg" alt="post"/>}*/}
                        <p className="Detailtext">{data.question_content}내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                        <button className="GoodButton" onClick={Good} disabled={isClicked}>{goods===true?<img className="DetailGood" src={good}/>:<img className="DetailGood" src={nogood} />}</button>
                        {/*여기 좋아요 부분 바꿔야함*/}
                        <p className="LikeCount">{data.likes} Likes</p>
                        <ModalButton className="ReportModal"/>
                    </div>
                </div>
                <div className="DetailChat">
                    <div className="ChatMain">
                        <h3>답변</h3>
                        <input
                            onChange={handleChange}
                            className="Chatting"
                            placeholder="내용을 입력해주세요"
                            value={text}
                        />
                        <button onClick={ChatRegister} className="RegisterChat">등록하기</button>
                    </div>
                    {/*여기부터 다시 하기 => 채팅불러오고 등록하는 부분*/}
                    <div className="Chat">
                        {chats.map((chat, index) => (
                            <div key={index} className="ChatContent">
                                <div className="Chatpart">
                                    <div className="ChatChat">
                                        <h5>이름</h5>
                                        <p>{chat}</p>
                                    </div>
                                    <div className="ChatGood">
                                        <button
                                            className="GoodButton"
                                            onClick={() => GoodChats(index)}
                                            disabled={goodChats[index]}
                                        >
                                            {goodChats[index] === true ? <img className="Chatgood" src={good}/> : <img className="Chatgood" src={nogood}/>}
                                        </button>
                                        <ModalChatButton index={index}/>
                                        {/*<button className="ReportButton"  onClick={() => ReportChats(index)}><img className="ChatReport"src={report}/></button>*/}
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Body>
            <QnADetailPageContent/>
        </Body>
    );
}

export default QnADetailPage;

