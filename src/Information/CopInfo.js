import axios from 'axios';
import {useState, useEffect, useRef} from "react";
import partner from '../assets/information/partner.JPG'
import partner2 from '../assets/information/partner2.JPG'

function CopInfo() {
    const [isListHover, setIsListHover] = useState(false);

    const [cop, setCop] = useState(null);
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

    return (
        <div>
            {data.map((item) => (
                <a key={item.id} href={item.CoCompany_url}>
                    <img
                        src={isListHover ? partner2 : partner}
                        alt=""
                    />
                </a>
            ))}
        </div>
    );
}



export default CopInfo;