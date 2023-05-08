import './TestArea.css';
import {useRef, useState} from "react";
import QuillEditor from "../components/QuillEditor"


const TextArea = (setTitle, setContent, title, content) => {
    const [htmlContent, setHtmlContent] = useState("");
    const quillRef = useRef();

    return (
        <div className={"Text"}>
            <input
                className="QuestionTitle"
                placeholder="제목을 입력해주세요"
                value={title}
            />
            <QuillEditor  className="QuestionText" quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
        </div>
    )
}
export default TextArea;