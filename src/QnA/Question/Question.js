import './Question.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import TextArea from "./TextArea"
import ImageArea from "./ImageArea"
import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

function Question() {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate("/QnAPage");
    };

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <div className={"Information"}>
            <Header />
            <section>
                <TextArea class={"container"}>
                    setTitle={setTitle}
                    setContent={setContent}
                    title={title}
                    content={content}
                </TextArea>
                <ImageArea />
                <button className="mainbutton" onClick={navigateToMain}>취소</button>
                <button className="mainbutton">등록하기</button>
            </section>
            <Footer />
        </div>
    );
}



export default Question;