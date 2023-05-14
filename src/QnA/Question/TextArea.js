import './TestArea.css';
import React, {useMemo, useRef, useState} from "react";
import QuillEditor from "../components/QuillEditor"
import ReactQuill from "react-quill";


const TextArea = (setTitle, setContent, title, content) => {
    const [htmlContent, setHtmlContent] = useState("");
    const quillRef = useRef();

    const modules = useMemo(
        () => ({
            toolbar: { // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image"],
                ],

            },
        }), []);

    const formats = useMemo(() => [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "size",
        "list",
        "bullet",
        "indent",
        "align",
        "image"
    ], []);

    const editorStyles = useMemo(() => ({
        height: '600px', // QuillEditor 높이를 400px로 설정
        marginLeft: '188px',
        width:'80%',
    }), []);

    const handleChange = (event) => {
        setHtmlContent(event.target.value);
    };

    return (
        <div className={"Text"}>
            <input
                className="QuestionTitle"
                placeholder="제목을 입력해주세요"
                value={title}
            />
            <div style={editorStyles}>
                <ReactQuill
                    ref={quillRef}
                    value={htmlContent}
                    onChange={setHtmlContent}
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    placeholder="내용을 입력하세요"
                    style={{height:'550px', marginBottom:'0'}}
                />
            </div>
        </div>
    )
}
export default TextArea;