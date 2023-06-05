import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorCoOpDeleteService from "../CoOpManage/OperatorCoOpDeleteService";
import axios from "axios";
import "./styles/OperatorBanner.css"
import OperatorBannerDeleteService from "./OperatorBannerDeleteService";

const OperatorBannerDelete=()=>{

    const OperatorBannerDeleteContent =()=>{
        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken =  "Bearer "+document.cookie.substring(name.length, document.cookie.length);
        const [data, setData] = useState([]);

        useEffect(() => {

            axios.get(`http://gateway.socoa.online:8080/board-service/banner/show/listBanner`, {
                headers: {
                    "Authorization": ssoToken
                }
            })
                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data)
                    const data = response.data;
                    const objects = [];

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj = {
                            homeBannerIndex: data.list[i].homeBannerIndex,
                            imageUrl: data.list[i].imageUrl
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

        const [bannerIndex, setBannerIndex] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChange =(e) => {
            setBannerIndex(e.target.value);
        }

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "삭제하기";
        }

        return (
            <div className="CoOpManage">
                <h1>배너 삭제 페이지입니다.</h1>
                <br></br>
                <div>
                    <h1>배너 정보</h1>
                    {data.map((item) => (
                        <div className="BannerShow">
                            <table className="BannerTable">
                                <tbody>
                                <tr>
                                    <td>이미지 index 번호</td>
                                    <td>{item.homeBannerIndex}</td>
                                </tr>
                                <tr>
                                    <td>이미지</td>
                                    <td><img className="bannerShow" src={item.imageUrl}/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <br></br>
                <h1>삭제 배너 정보를 입력하세요</h1>
                <div>
                    <input placeholder="Banner index를 적으시오" onChange={onChange} value={bannerIndex} className="inputCoOpInfo" type='number'/>
                </div>
                <div>
                    <button className="inCoOpButton" onClick={()=> {setDoEnroll(!doEnroll);}}>{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorBannerDeleteService bannerIndex={bannerIndex} />:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorBannerDeleteContent/>
        </Body>
    );
}

export default OperatorBannerDelete;

