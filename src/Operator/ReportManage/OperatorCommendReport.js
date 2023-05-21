import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorReport.css"
import axios from "axios";
import ReportCommendManagePreview from "./components/ReportCommendManagePreview";

const OperatorCommendReport=()=>{
    const OperatorCommendReportContent =()=>{
        const [data, setData] = useState([]);

        useEffect(() => {

            axios.get(`/complaint-service/commend/show/listQnA`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    const objects = [];

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj = {
                            commendIndex: data.list[i].commendIndex,
                            questionIndex: data.list[i].questionIndex,
                            commendContent: data.list[i].commendContent,
                        };
                        console.log(obj)
                        objects.push(obj);
                    }
                    setData(objects);
                    // 배열에 저장된 객체를 출력
                    console.log(objects);
                })
                .catch(error => {
                    console.log(error.response.data)
                    console.error(error);
                });
        }, []);

        const navigate = useNavigate();

        const ReportQnAPage = () => {
            navigate("/OperatorPage/CoOpManage/Modify");
        };
        const ReportCommendPage = () => {
            navigate("/OperatorPage/CoOpManage/Delete");
        };

        return (
            <div className="ReportManage">
                <h1>코멘트 신고목록</h1>
                <div className="QnAList">
                    {data.map((item) => (
                        <ReportCommendManagePreview commendIndex={item.commendIndex} questionIndex={item.questionIndex} commendContent={item.commendContent}/>
                    ))}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCommendReportContent/>
        </Body>
    );
}

export default OperatorCommendReport;

