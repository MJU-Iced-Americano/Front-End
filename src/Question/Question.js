import './Question.css';
import Header from '../component/Header/Header';
import Footer from "../component/Footer/Footer";
import TextArea from"./TextArea"
import ImageArea from"./ImageArea"
import {useState, useEffect, useRef} from "react";

function Question() {

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
                <button>최소</button>
                <button>등록</button>
            </section>
            <Footer />
        </div>
    );
}



export default Question;