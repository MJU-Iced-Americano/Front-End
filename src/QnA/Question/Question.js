import './Question.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import TextArea from "./TextArea"
import ImageArea from "./ImageArea"
import React, {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import Body from "../../components/Body/Body";

const Question=()=>{
    const QuestionContent =()=> {
        const navigate = useNavigate();

        const navigateToMain = () => {
            navigate("/QnAPage");
        };

        const [title, setTitle] = useState("")
        const [content, setContent] = useState("")

        return (
            <div className={"Information"}>
                    <TextArea class={"container"}>
                        setTitle={setTitle}
                        setContent={setContent}
                        title={title}
                        content={content}
                    </TextArea>
                    <ImageArea />
                    <button className="maincancelbutton" onClick={navigateToMain}>취소</button>
                    <button className="mainbutton">등록하기</button>
            </div>
        );
    }

    return(
        <Body>
            <QuestionContent/>
        </Body>
    );
}

export default Question;