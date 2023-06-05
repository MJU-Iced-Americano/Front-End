import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/QnAPage.css';

function QnAPreview({index,question_title,question_content,updateDate,updateTime,question_type}) {
    const[type,setType] = useState('');
    const navigate = useNavigate();
    console.log(index);
    console.log(question_title);
    console.log(question_content);
    console.log(updateDate);
    console.log(updateTime);
    console.log(question_type);

    useEffect(() => {
            if (question_type === "PAYMENT") {
                setType('결제');
                return;
            }
            setType('강의');


    }, []);


    const navigateToQnADetail = () => {
        navigate(`/QnAPage/QnADetailPage/${index}`);
    };

    return(
        <div className="QnAGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">[{type}]&nbsp;{question_title}</h3>
            <div className="DetailcontentPreview" dangerouslySetInnerHTML={{__html: question_content}}></div>
            <div className="QnADetailDate">
                <p>{updateDate}&nbsp;{updateTime}</p>
            </div>
        </div>
    );
}


export default QnAPreview;
