import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorCoOpDeleteService from "../CoOpManage/OperatorCoOpDeleteService";
import axios from "axios";

const OperatorCoOpDelete=()=>{

    const OperatorCoOpDeleteContent =()=>{

        const [data, setData] = useState([]);

        useEffect(() => {

            axios.get(`/company-service/company/get`)
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    const objects = [];

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj = {
                            id: data.list[i].id,
                            CoCompany_name: data.list[i].coCompany_name,
                            CoCompany_url: data.list[i].coCompany_url
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

        const [companyIndex, setCompanyIndex] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChange =(e) => {
            setCompanyIndex(e.target.value);
        }

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "삭제하기";
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 삭제 페이지입니다.</h1>
                <br></br>
                <div>
                    <h1>협력사 정보</h1>
                    {data.map((item) => (
                        <div className="CoOpShow">
                            <table className="CoOpShowTable">
                                <tbody>
                                <tr>
                                    <td className="CoOpShowTablein">협력사 index 번호</td>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <td className="CoOpShowTablein">협력사 이름</td>
                                    <td>{item.CoCompany_url}</td>
                                </tr>
                                <tr>
                                    <td className="CoOpShowTablein">협력사 url</td>
                                    <td>{item.CoCompany_name}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <br></br>
                <h1>삭제 협력사 정보를 입력하세요</h1>
                <div>
                    <input placeholder="Company index를 적으시오" onChange={onChange} value={companyIndex} className="inputCoOpInfo" type='number'/>
                </div>
                <div>
                    <button className="inCoOpButton" onClick={()=> {setDoEnroll(!doEnroll);}}>{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorCoOpDeleteService companyIndex={companyIndex} />:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpDeleteContent/>
        </Body>
    );
}

export default OperatorCoOpDelete;

