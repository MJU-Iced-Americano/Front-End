import './Question.css';
import TextArea from "./TextArea"
import React, {useState, useEffect, useRef, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import Body from "../../components/Body/Body";
import ReactQuill from "react-quill";
import axios from "axios";
import ImageArea from "./ImageArea";

const Question=()=>{
    const QuestionContent =()=> {
        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken =  "Bearer " + document.cookie.substring(name.length, document.cookie.length);
        const navigate = useNavigate();

        const navigateToMain = () => {
            navigate("/QnAPage");
        };

        ////등록성공시 화면넘어갈수 있는지 판단
        const [addSuccess, setAddSuccess] = useState('false');
        const [questionTitle, setTitles] = useState("")
        const [questionContent, setHtmlContent] = useState("");
        const quillRef = useRef();
        const [type, setSelectedOption] = useState('PAYMENT');
        const options = [
            { label: '결제', value: 'PAYMENT' },
            { label: '강의', value: 'LECTURE' },
        ];

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
            "align"
        ], []);

        const editorStyles = useMemo(() => ({
            height: '600px', // QuillEditor 높이를 400px로 설정
            margin: 'auto',
            width:'80%',
        }), []);

        const changeTitle =(e)=>{
            setTitles(e.target.value);
        }


        const AddService =  () => {
            setAddSuccess(false);
            console.log(questionTitle)
            console.log(questionContent)
            console.log(type)
            console.log(selectedFiles)

            const qnARegisterDto = {
                questionTitle, questionContent, type
            };
            console.log(qnARegisterDto)

            const formData = new FormData();

            formData.append('qnARegisterDto',new Blob([JSON.stringify(qnARegisterDto)], { type: "application/json" }));

            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append('image', selectedFiles[i]);
            }

            for (let key of formData.keys()) {
                console.log(key, ":", formData.get(key));
            }

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                    "Authorization" : ssoToken
                }
            };
            axios.post(`http://gateway.socoa.online:8000/board-service/question/register`, formData, config)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    setAddSuccess(true);
                })
                .catch(error => {
                    console.error(error);
                });

            //저장성공시 화면 돌아가기
            if(addSuccess){
                navigateToMain();
            }
        }

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };

        const [selectedFiles, setSelectedFiles] = useState([]);

        const handleFileSelect = (files) => {
            setSelectedFiles(files);
        };

        return (
            <div className={"Information"}>
                <div className="QnACategory">
                    <h1>글 작성하기</h1>
                    <select value={type} onChange={handleOptionChange} className="CategorySelect">
                        {options.map((option) => (
                            <option key={option.value} value={option.value} className="CategoryOption">
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={"Text"}>
                    <input
                        className="QuestionTitle"
                        placeholder="제목을 입력해주세요"
                        value={questionTitle}
                        onChange={changeTitle}
                    />
                    <div style={editorStyles}>
                        <ReactQuill
                            ref={quillRef}
                            value={questionContent}
                            onChange={setHtmlContent}
                            modules={modules}
                            formats={formats}
                            theme="snow"
                            placeholder="내용을 입력하세요"
                            style={{height:'550px', marginBottom:'0'}}
                        />
                    </div>
                </div>
                <div>
                    <ImageArea onFileSelect={handleFileSelect} />
                </div>
                    <button className="maincancelbutton" onClick={navigateToMain}>취소</button>
                    <button className="mainbutton" onClick={AddService}>등록하기</button>
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