import './Question.css';
import TextArea from "./TextArea"
import React, {useState, useEffect, useRef, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import Body from "../../components/Body/Body";
import ReactQuill from "react-quill";
import axios from "axios";

const Question=()=>{
    const QuestionContent =()=> {
        const navigate = useNavigate();

        const navigateToMain = () => {
            navigate("/QnAPage");
        };

        const [category, setCategory] = useState("")
        const [titles, setTitles] = useState("")
        const [htmlContent, setHtmlContent] = useState("");
        const quillRef = useRef();

        const categoryClick =(e)=>{
            setCategory(e.target.value);
        }
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

        const now = new Date();
        const year = now.getFullYear();

        const changeTitle =(e)=>{
            setTitles(e.target.value);
        }
        const AddQuestion =()=> {
            console.log(category);
            console.log(titles);
            console.log(htmlContent);
            console.log(year);
            AddService(category,titles,htmlContent);
        };

        function AddService({category,titles,htmlContent}){
            const [error, setError] = useState(null);

            useEffect(()=>{

                const postQna = async () => {
                    try{
                        setError(null);
                        const response = await axios.post('/board-service/qna/register', {
                            CoCompany_name: category,
                            CoCompany_url: titles,
                            htmlContent: htmlContent
                        });
                        console.log(response);
                    }catch(e){
                        console.log(e.response.data);
                    }
                };
                postQna();
            }, []);

            return(
                <div>
                    <p>등록이 완료되었습니다</p>
                </div>
            );
        }

        return (
            <div className={"Information"}>
                <div className="QnACategory">
                    <h1>글 작성하기</h1>
                    <button id="Category" className="Categorybutton" value="Title1" onClick={categoryClick}>Title 1</button>
                    <button id="Category" className="Categorybutton" value="Title2" onClick={categoryClick}>Title 2</button>
                    <button id="Category" className="Categorybutton" value="Title3" onClick={categoryClick}>Title 3</button>
                </div>
                <div className={"Text"}>
                    <input
                        className="QuestionTitle"
                        placeholder="제목을 입력해주세요"
                        value={titles}
                        onChange={changeTitle}
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
                    <button className="maincancelbutton" onClick={navigateToMain}>취소</button>
                    <button className="mainbutton" onClick={AddQuestion}>등록하기</button>
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