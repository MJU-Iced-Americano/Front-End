import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorReport.css"
import axios from "axios";
import { useLocation } from 'react-router-dom';

const OperatorQnAReportOne=()=>{

    const OperatorQnAReportOneContent =()=>{
        const location = useLocation();
        console.log(location);
        const index = location.pathname.split('/').slice(-1)[0];
        console.log(index);

        const [data, setData] = useState([]);

        const[content,setContent] = useState('');
        const[questionIndex, setQuestionIndex] = useState('');

////////////////////////////////////신고 게시물 불러오기///////////////////////////////////
        useEffect(() => {

            axios.get(`http://3.35.237.123:8080/complaint-service/commend/content/show/${index}`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    console.log(data)
                    setContent(data.data.commendContent);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        ////////////////////////////////////신고정보 불러오기///////////////////////////////////
        useEffect(() => {

            axios.get(`http://3.35.237.123:8080/complaint-service/commend/complaint/show/${index}`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    console.log(data)
                    console.log(data.data.length)
                    const objects = [];

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.data.length; i++) {
                        const obj = {
                            complaintIndex: data.data[i].complaintIndex,
                            questionIndex: data.data[i].questionIndex,
                            type: data.data[i].type,
                            complaintContent: data.data[i].complaintContent,
                        };
                        console.log(obj)
                        objects.push(obj);
                    }
                    setData(objects);
                    setQuestionIndex(objects[1].questionIndex);
                    console.log()
                    // 배열에 저장된 객체를 출력
                    console.log(objects);
                })

                .catch(error => {
                    console.log(error.response.data)
                    console.error(error);
                });
        }, []);


        const navigate = useNavigate();

        const navigateQnA = () => {
            navigate(`/QnAPage/QnADetailPage/${questionIndex}`);
        };

        return (
            <div className="ReportQnAReport">
                <h1>신고확인</h1>
                <div className="ReportQnAReportContent">
                    <h3>신고답글내용</h3>
                    <h4>{content}</h4>
                </div>
                <div className="ReportQnAList">
                    <h1>신고내용</h1>
                    {data.map((item) => (
                        <div className="ReportQnAListShow">
                            <table className="ReportQnAListShowTable">
                                <tbody>
                                <tr>
                                    <td className="ReportQnAListShowTableTD">신고 종류</td>
                                    <td>{item.type}</td>
                                </tr>
                                <tr>
                                    <td className="ReportQnAListShowTableTD">신고 내용</td>
                                    <td>{item.complaintContent}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="ReportUserButtonDiv">
                    <button className="ReportUserButton" onClick={navigateQnA}>게시물 보기</button>
                    <button className="ReportUserButton">유저 벤하기</button>
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorQnAReportOneContent/>
        </Body>
    );
}

export default OperatorQnAReportOne;

