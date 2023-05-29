import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ComplaintModal = ({index, onClose}) => {
    const [type, setType] = useState("");
    const [complaintContent, setContent] = useState("");

    useEffect(() => {
        console.log("dj");
        console.log(index + "들어왓엉??");
    }, []);
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };


    const handleContentChange = (event) => {
        setContent(event.target.value);
    };
    const handleClose = () => {
        onClose(); // 부모 컴포넌트에서 전달받은 onClose 함수 호출
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(index + "이게?");

        console.log(type + complaintContent + "??");

        const complaintData = {
            complaintContent: complaintContent,
            type: type,
        };

        axios.post(`http://3.35.237.123:8080/complaint-service/review/register/${index}`, complaintData)
            .then((response) => {
                console.log("들어갓댕. " + index);
                console.log(response.data);
            })
            .catch((error) => {
                // 에러 처리 코드 작성
            });
    };


    return (
        <div>
            <h2>신고</h2>
            <div>
                <label htmlFor="type">Type:</label>
                <select id="type" value={type} onChange={handleTypeChange}>
                    <option value="">선택하세요</option>
                    <option value="HATE_SPEECH">Hate Speech</option>
                    <option value="PROFANITY">Profanity</option>
                    <option value="SPAM">Spam</option>
                    <option value="ILLEGAL_CONTENT">Illegal Content</option>
                    <option value="ETC">기타</option>
                </select>
            </div>
            <div>
                <label htmlFor="content">내용:</label>
                <textarea id="content" value={complaintContent} onChange={handleContentChange}></textarea>
            </div>
            <button onClick={()=>{handleSubmit(); handleClose();}} >신고</button>
            <button onClick={handleClose}>닫기</button>

        </div>
    );
};

export default ComplaintModal;
