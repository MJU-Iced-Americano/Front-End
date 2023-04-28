import React, {useState} from 'react';
import './styles/QnADetailPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import image from "../assets/Footer/socoa-ver2.png"
import good from "../assets/QnA/Good.png"

function QnAPage({title, date, imageURL, content, chat}){

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);

    const Good = () => {
        setCount(count + 1);
    };

    const ChatRegister = () => {
        setChats([...chats, text]);
        setText('');
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <Header />
            <div className="Detailframe">
                <div className="DetailMain">
                    <div className="DetailHeader">
                        <h1 className="DetailName">{title}제목</h1>
                        <p className="DetailInfo">{date}관리자</p>
                    </div>
                    <div className="DetailContent">
                    {imageURL && <img src={imageURL} alt="post"/>}
                    {image && <img src={image} className="DetailImg" alt="post"/>}
                    <p className="Detailtext">{content}내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                    <button className="GoodButton" onClick={Good}><img src={good} /></button>
                    <p className="LikeCount">{count} Likes</p>
                    </div>
                </div>
                <div className="DetailChat">
                    <div className="ChatMain">
                        <h3>답변</h3>
                        <input
                            onChange={handleChange}
                            className="chat"
                            placeholder="내용을 입력해주세요"
                            value={text}
                        />
                        <button onClick={ChatRegister}>등록하기</button>
                    </div>
                    <div className="Chat">
                        {chats.map((chat, index) => (
                            <div key={index}>
                                <h5>이름</h5>
                                <p>{chat}</p>
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

