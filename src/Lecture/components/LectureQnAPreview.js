import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QnAPreview({courseIndex,lectIndex,index,question_title,question_content}) {
    const names = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(names.length, document.cookie.length);
    const navigate = useNavigate();
    console.log(index);
    console.log(question_title);
    console.log(question_content);


    useEffect(() => {

        axios.get(`http://gateway.socoa.online:8000/lecture-service/lecture/question/${index}`,{
            // withCredentials:true,
            headers : {
                "Authorization" : ssoToken
            }
        })
            .then(response => {
                const dat = response.data.data;
                console.log(dat)


            })
            .catch(error => {
                console.error(error);
            });


    }, []);

    const navigateToQnADetail = () => {
        navigate(`/LecturePage/${courseIndex}/${lectIndex}/question/detailpage/${index}`);
    };

    return(
        <div className="QnAGoDetail" onClick={navigateToQnADetail}>
            <h3 className="DetailNamePreview">{question_title}</h3>
            <p className="DetailcontentPreview">{question_content}</p>
        </div>
    );
}


export default QnAPreview;
