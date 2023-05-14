import React, {useEffect, useState} from 'react';
import Body from "../../components/Body/Body";
import OperatorCoOpModifyService from "./OperatorCoOpModifyService";
import axios from "axios";
import "./styles/OperatorCoOp.css"

const OperatorCoOpModify=()=>{

    const OperatorCoOpModifyContent =()=>{

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
        const [companyName, setCompanyName] = useState('');
        const [companyURL, setCompanyURL] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChangeIndex =(e) => {
            setCompanyIndex(e.target.value);
        }
        const onChangeName =(e) => {
            setCompanyName(e.target.value);
        }
        const onChangeURL =(e) => {
            setCompanyURL(e.target.value);
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 수정 페이지입니다.</h1>
                <br></br>
                <div>
                    <h1>협력사 정보</h1>
                    {data.map((item) => (
                        <div className="CoOpShow">
                            <table className="CoOpShowTable">
                                <tbody>
                                    <tr>
                                        <td>협력사 index 번호</td>
                                        <td>{item.id}</td>
                                    </tr>
                                    <tr>
                                        <td>협력사 이름</td>
                                        <td>{item.CoCompany_url}</td>
                                    </tr>
                                    <tr>
                                        <td>협력사 url</td>
                                        <td>{item.CoCompany_name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <br></br>
                <h1>수정 협력사 정보를 입력하세요</h1>
                <div>
                    <input placeholder="협력사 index 번호를 적으시오" onChange={onChangeIndex} value={companyIndex} className="inputCoOpInfo" type='number'/>
                    <input placeholder="협력사 이름을 적으시오" onChange={onChangeName} value={companyName} className="inputCoOpInfo" type='text'/>
                    <input placeholder="협력사 url을 적으시오" onChange={onChangeURL} value={companyURL} className="inputCoOpInfo" type='text'/>
                </div>
                <div>
                    <button className="inCoOpButton" onClick={()=> {setDoEnroll(!doEnroll);}}>수정하기</button>
                    {doEnroll===true?<OperatorCoOpModifyService companyIndex={companyIndex} companyName={companyName} companyURL={companyURL}/>:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpModifyContent/>
        </Body>
    );
}

export default OperatorCoOpModify;

