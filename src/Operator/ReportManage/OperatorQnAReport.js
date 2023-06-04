import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorReport.css"
import ReportManagePreview from "./components/ReportManagePreview";
import axios from "axios";

const OperatorQnAReport=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`http://gateway.socoa.online:8000/complaint-service/question/show/listQnA`)
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj = {
                        questionIndex: data.list[i].questionIndex,
                        questionTitle: data.list[i].questionTitle,
                        questionContent: data.list[i].questionContent,
                    };
                    console.log(obj)
                    objects.push(obj);
                }
                setData(objects);
                // 배열에 저장된 객체를 출력
                console.log(objects);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const OperatorQnAReportContent =()=>{
        const navigate = useNavigate();

        return (
            <div className="ReportManage">
                <h1>게시글 신고목록</h1>
                <div className="QnAList">
                    {data.map((item) => (
                        <ReportManagePreview questionTitle={item.questionTitle} questionContent={item.questionContent} questionIndex={item.questionIndex}/>
                    ))}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorQnAReportContent/>
        </Body>
    );
}

export default OperatorQnAReport;

