import './Question.css';
import TextArea from "./TextArea"
import ImageArea from "./ImageArea"
import {useState} from "react";
import Body from "../../components/Body/Body";

function Question() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const QuestionContent=()=> {
        return(
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
        );
    }
    return (
        <div className={"Information"}>
            <Body>
                <QuestionContent/>
            </Body>
        </div>
    );
}



export default Question;