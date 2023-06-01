import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import "./styles/OperatorReport.css"
import ReportManagePreview from "./components/ReportManagePreview";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const OperatorQnAReportOne=()=>{

    const OperatorQnAReportOneContent =()=>{
        const location = useLocation();
        console.log(location);
        const index = location.pathname.split('/').slice(-1)[0];
        console.log(index);

        const [datacontent, setDataContent] = useState([]);
        const [data, setData] = useState([]);

        const [img, setImg] = useState([]);
        const[typecontent,setTypeContent] = useState('');
        const[contentTitle,setContentTitle] = useState('');
        const[content,setContent] = useState('');
////////////////////////////////////신고 게시물 불러오기///////////////////////////////////
        useEffect(() => {

            axios.get(`http://3.35.237.123:8080/complaint-service/question/content/show/${index}`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    console.log(data)
                    setContentTitle(data.data.questionTitle);
                    setContent(data.data.questionContent);
                    const objects = [];

                    for (let i = 0; i < data.data.questionImageList.length; i++) {
                        const obj = {
                            imageIndex: data.data.questionImageList[i].imageIndex,
                            imageUrl: data.data.questionImageList[i].imageUrl
                        };
                        objects.push(obj);
                    }
                    setImg(objects);

                    if (data.data.type === "PAYMENT") {
                        setTypeContent('결제');
                        return;
                    }
                    setTypeContent('강의');
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        ////////////////////////////////////신고정보 불러오기///////////////////////////////////
        useEffect(() => {

            axios.get(`http://3.35.237.123:8080/complaint-service/question/complaint/show/${index}`)
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
                    // 배열에 저장된 객체를 출력
                    console.log(objects);
                })

                .catch(error => {
                    console.log(error.response.data)
                    console.error(error);
                });
        }, []);


        const navigate = useNavigate();

        return (
            <div className="ReportQnAReport">
                <h1>신고확인</h1>
                <div className="ReportQnAReportContent">
                    <h3>신고게시물 내용</h3>
                    <h4>{contentTitle}</h4>
                    <h5>{content}</h5>
                    {img.map((item) => (
                        <img src={item.imageUrl} className="DetailImg" alt="post"/>
                    ))}
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

