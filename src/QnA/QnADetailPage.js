import React, {useEffect, useState} from 'react';
import './styles/QnADetailPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import good from "../assets/QnA/Good.png"
import nogood from "../assets/QnA/NoGood.png"
import axios from "axios";
import ModalButton from "./components/ModalButton"
import ModalChatButton from "./components/ModalChatButton";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function QnADetailPage(){

    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken = "Bearer " + document.cookie.substring(name.length, document.cookie.length);

    //db연결/////////////////////////////////////
    const location = useLocation();
    console.log(location);
    const index = location.pathname.split('/').slice(-1)[0];
    console.log(index);

    ////등록성공시 화면넘어갈수 있는지 판단
    const [addSuccess, setAddSuccess] = useState('false');
    const [data, setData] = useState([]);
    const [img, setImg] = useState([]);
    const [chatData, setChatData] = useState([]);
    const[type,setType] = useState('');
    const[day,setDay] = useState('');
    const[time,setTime] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 나타내는 state
    const [token, setToken] = useState('');

    const ssoClientCookie = document.cookie.includes('SOCOA-SSO-TOKEN');


    useEffect(() => {

        setIsLoggedIn(ssoClientCookie);
        axios.get(`http://gateway.socoa.online:8000/board-service/question/show/${index}`, {
        // withCredentials:true,
            headers : {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const dat = response.data;
                setData(dat.data);
                setCount(dat.data.goodCount);
                setDay(dat.data.updatedAt.substring(0,10))
                setTime(dat.data.updatedAt.substring(11))
                const objects = [];

                for (let i = 0; i < dat.data.questionImageList.length; i++) {
                    const obj = {
                        imageIndex: dat.data.questionImageList[i].imageIndex,
                        imageUrl: dat.data.questionImageList[i].imageUrl
                    };

                    console.log(obj)
                    objects.push(obj);
                }
                setImg(objects);

                if (dat.data.type === "PAYMENT") {
                    setType('결제');
                    return;
                }
                setType('강의');
            })
            .catch(error => {
                console.error(error);
            });


        axios.get(`http://gateway.socoa.online:8000/board-service/question/show/commendList/${index}`, {
            headers : {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const datchat = response.data;
                const objects = [];

                for (let i = 0; i < datchat.list.length; i++) {
                    const obj = {
                        commendIndex: datchat.list[i].commendIndex,
                        commendContent: datchat.list[i].commendContent,
                        userName: datchat.list[i].userName
                    };
                    console.log(obj)
                    objects.push(obj);
                }
                setChatData(objects);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    ////////////////////////////////////////////////////////
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);
    const [goods, setGoods] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [goodChats, setGoodChats] = useState([]);
    const [reportChats, setReportChats] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const RedirectPage = () => {
        console.log("리다이렉트")
        window.location.reload();
    };

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
        ///////좋아요 add부분//////////////////////////////
        axios.get(`http://gateway.socoa.online:8000/board-service/question/goodCheck/${index}`,{
            questionIndex : `${index}`,
            headers: {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                setCount(count+1);
            })
            .catch(error => {
                console.error(error);
            });
        /////////////////////////////////////////////////
        setGoods(true);
    };

    function AddChatDB(index,text) {
        setAddSuccess(false);

        axios.post(`http://gateway.socoa.online:8000/board-service/question/commend/register/${index}`,{
            commendContent : `${text}`
        }, {
            headers: {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                setAddSuccess(true);
            })
            .catch(error => {
                console.error(error);
            });
        if(addSuccess){
            console.log("여기 되어야해")
            RedirectPage();
        }
    }

    const ChatRegister = () => {
        if (text.trim() !== '') {
            setChats([...chats, text]);
            setGoodChats([...goodChats, false]);
            AddChatDB(index,text);
            setText('');
        }
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
                        <h1 className="DetailName">[{type}]&nbsp;{data.questionTitle}</h1>
                        <p className="DetailInfo">작성자:{data.userName}&nbsp;&nbsp;{day}&nbsp;{time}</p>
                    </div>
                    <div className="DetailContent">
                        {/*data.questionContent*/}
                        {img.map((item) => (
                            <img src={item.imageUrl} className="DetailImg" alt="post"/>
                        ))}
                        <div className="Detailtext" dangerouslySetInnerHTML={{__html: data.questionContent}}></div>
                        <button className="GoodButton" onClick={Good} disabled={isClicked}>{goods===true?<img className="DetailGood" src={good}/>:<img className="DetailGood" src={nogood} />}</button>
                        {/*여기 좋아요 부분 바꿔야함*/}
                        <p className="LikeCount">{count} Likes</p>
                        <ModalButton className="ReportModal" index={index}/>
                    </div>
                </div>
                <div className="DetailChat">
                    <div className="ChatMain">
                        <h3>답변</h3>
                        {isLoggedIn ? (
                            <input
                                onChange={handleChange}
                                className="Chatting"
                                placeholder="내용을 입력해주세요"
                                value={text}
                            />
                        ) : (
                            <input
                                onChange={handleChange}
                                className="Chatting"
                                placeholder="로그인 후 입력해주세요"
                                value={text}
                            />
                        )}

                        {isLoggedIn ? (
                            <button onClick={ChatRegister} className="RegisterChat">등록하기</button>
                        ) : (
                            <button className="RegisterNoLoginChat">등록하기</button>
                        )}
                    </div>
                    <div className="Chat">
                        {/**/}
                        {chatData.map((chat) => (
                            <div key={chat.commendIndex} className="ChatContent">
                                <div className="Chatpart">
                                    <div className="ChatChat">
                                        <h5>{chat.userName}</h5>
                                        <p>{chat.commendContent}</p>
                                    </div>
                                    <div className="ChatGood">
                                        <button
                                            className="GoodButton"
                                            onClick={() => GoodChats(chat.commendIndex)}
                                            disabled={goodChats[chat.commendIndex]}
                                        >
                                            {goodChats[chat.commendIndex] === true ? <img className="Chatgood" src={good}/> : <img className="Chatgood" src={nogood}/>}
                                        </button>
                                        <ModalChatButton index={chat.commendIndex} />
                                        {/*<button className="ReportButton"  onClick={() => ReportChats(index)}><img className="ChatReport"src={report}/></button>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/**/}
                        {/*{chats.map((chat, index) => (*/}
                        {/*    <div key={index} className="ChatContent">*/}
                        {/*        <div className="Chatpart">*/}
                        {/*            <div className="ChatChat">*/}
                        {/*                <h5>이름</h5>*/}
                        {/*                <p>{chat}</p>*/}
                        {/*            </div>*/}
                        {/*            <div className="ChatGood">*/}
                        {/*                <button*/}
                        {/*                    className="GoodButton"*/}
                        {/*                    onClick={() => GoodChats(index)}*/}
                        {/*                    disabled={goodChats[index]}*/}
                        {/*                >*/}
                        {/*                    {goodChats[index] === true ? <img className="Chatgood" src={good}/> : <img className="Chatgood" src={nogood}/>}*/}
                        {/*                </button>*/}
                        {/*                <ModalChatButton index={index}/>*/}
                        {/*                /!*<button className="ReportButton"  onClick={() => ReportChats(index)}><img className="ChatReport"src={report}/></button>*!/*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default QnADetailPage;

