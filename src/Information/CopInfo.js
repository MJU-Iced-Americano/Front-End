import axios from 'axios';
import {useState, useEffect, useRef} from "react";
import partner from '../assets/information/partner.JPG'
import "./styles/Info.css"

function CopInfo() {

    const [data, setData] = useState([]);
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken = "Bearer " + document.cookie.substring(name.length, document.cookie.length);


    useEffect(() => {

        axios.get(`http://gateway.socoa.online:8000/company-service/company/get`, {
            headers : {
                "Authorization" : ssoToken
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
                        id: data.list[i].id,
                        CoCompany_name: data.list[i].coCompany_name,
                        CoCompany_photo: data.list[i].coCompany_photo_url,
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

    return (
        <div className="CoOpContent">
            {data.map((item) => (
                    <div className="CoOp">
                        <a key={item.id} href={item.CoCompany_url}>
                            <img
                                src={item.CoCompany_photo}
                                className="CoOpImg"
                                alt=""
                            />
                            <h5>{item.CoCompany_name}</h5>
                        </a>
                    </div>
            ))}
        </div>
    );
}



export default CopInfo;