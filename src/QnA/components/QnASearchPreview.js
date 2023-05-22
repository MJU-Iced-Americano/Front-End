import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/QnAPage.css';
import axios from "axios";

function QnASearchPreview({inputs}) {
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    // console.log(index);
    // console.log(question_title);
    // console.log(question_content);
    // console.log(updateDate);
    // console.log(updateTime);
    // console.log(question_type);


//////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {


        axios.post(`/board-service/question/search`,{
            keyword : `${inputs}`
        })
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const data = response.data;
                console.log(data.list.length);
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj= {
                        questionIndex: data.list[i].questionIndex,
                        questionTitle: data.list[i].questionTitle,
                        questionContent: data.list[i].questionContent,
                        updatedDay: data.list[i].updatedAt.substring(0,10),
                        updateTime : data.list[i].updatedAt.substring(11),
                        type: data.list[i].type,
                    }
                    console.log(obj);
                    objects.push(obj);
                }
                setData(objects);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
//////////////////////////////////////////////////////////////////////////////////

    const navigateToSearchQnADetail = (index) => {
        navigate(`/QnAPage/QnADetailPage/${index}`);
    };

    return(
        <div>
        {data.map((item) => (
            <div className="QnAGoDetail" onClick={() => navigateToSearchQnADetail(item.questionIndex)}>
                <h3 className="DetailNamePreview">[{item.type}]&nbsp;{item.questionTitle}</h3>
                <p className="DetailcontentPreview">{item.questionContent}</p>
                <div className="QnADetailDate">
                    <p>{item.updatedDay}&nbsp;{item.updateTime}</p>
                </div>
            </div>
            ))}
        </div>

    );
}


export default QnASearchPreview;
