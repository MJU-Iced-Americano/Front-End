import React, {useState} from 'react';
import './styles/QnADetailPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import image from "../assets/Footer/socoa-ver2.png"
import good from "../assets/QnA/Good.png"
import nogood from "../assets/QnA/NoGood.png"
import report from "../assets/QnA/Report.png"
import chatIcon from "../assets/QnA/ChatIcon.png"
import axios from "axios";

function QnAPage({title, date, imageURL, content, chat}){

    const [qna, setQnA] = useState(null);
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);
    const [goods, setGoods] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [goodChats, setGoodChats] = useState([]);
    const [reportChats, setReportChats] = useState([]);
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [textChat, setTextChat] = useState('');

    const fetchqna = async () => {
        try {
            setQnA(null);
            
            const qna = await axios.get(
                `http://52.78.47.54:8080/show/1` //나중에 1이 아니라 다른거에도 적용하게
        );
        }catch (e) {

        }
    }

    const GoodChats = (chatIndex) => {
        GoodChat(chatIndex);
    }
    const ReportChats = (chatIndex) => {
        ReportChat(chatIndex);
    }
    const PlusChats = (chatIndex) => {
        PlusChat(chatIndex);
        setIsChatVisible(!isChatVisible);
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

    const PlusChat = (chatIndex) => {

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

    const ChatChatRegister = () => {
        // if (text.trim() !== '') {
        //     setChats([...chats, text]);
        //     setGoodChats([...goodChats, false]);
        //     setText('');
        // }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleChatChange = (event) => {
        setTextChat(event.target.value);
    };

    return (
        <div>
            <Header />
            <div className="Detailframe">
                <div className="DetailMain">
                    <div className="DetailHeader">
                        <h1 className="DetailName">{title}제목</h1>
                        <p className="DetailInfo">{date}관리자, 등록날, 조회수</p>
                    </div>
                    <div className="DetailContent">
                        {imageURL && <img src={imageURL} alt="post"/>}
                        {image && <img src={image} className="DetailImg" alt="post"/>}
                        <p className="Detailtext">{content}내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                        <button className="GoodButton" onClick={Good} disabled={isClicked}>{goods===true?<img className="DetailGood" src={good}/>:<img className="DetailGood" src={nogood} />}</button>
                        <p className="LikeCount">{count} Likes</p>
                        <div className="ReportDiv">
                            <button className="ReportButton"><img className="ReportImg"src={report}/></button>
                        </div>
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
                    <div className="Chat">
                        {chats.map((chat, index) => (
                            <div key={index} className="ChatContent">
                                <div className="Chatpart">
                                    <div className="ChatChat">
                                        <h5>이름</h5>
                                        <p>{chat}</p>
                                    </div>
                                    <div className="ChatGood">
                                        <button className="ChatIconButton" onClick={() => PlusChats(index)}><img className="ChatIcon"src={chatIcon}/></button>

                                        <button
                                            className="GoodButton"
                                            onClick={() => GoodChats(index)}
                                            disabled={goodChats[index]}
                                        >
                                            {goodChats[index] === true ? <img className="Chatgood" src={good}/> : <img className="Chatgood" src={nogood}/>}
                                        </button>
                                        <button className="ReportButton"  onClick={() => ReportChats(index)}><img className="ChatReport"src={report}/></button>
                                    </div>
                                </div>
                                <div className="PlusChatDiv" style={{ display: isChatVisible ? "block" : "none" }}>
                                        <h5>대댓글</h5>
                                        <input
                                            onChange={handleChatChange}
                                            className="ChatChatting"
                                            placeholder="내용을 입력해주세요"
                                            value={textChat}
                                        />
                                        <button onClick={ChatChatRegister} className="ChatRegisterChat">등록하기</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default QnAPage;

