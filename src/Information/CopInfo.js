import axios from 'axios';
import {useState, useEffect, useRef} from "react";
import partner from '../assets/information/partner.JPG'
import partner2 from '../assets/information/partner2.JPG'

function CopInfo() {
    const [isListHover, setIsListHover] = useState(false);

    const [cop, setCop] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/company-service/company/get`)
            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.length; i++) {
                    const obj = {
                        id: data[i].id,
                        CoCompany_name: data[i].CoCompany_name,
                        CoCompany_url: data[i].CoCompany_url
                    };
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
                        onMouseOver={() => setIsListHover(true)}
                        onMouseOut={() => setIsListHover(false)}
                        src={isListHover ? partner2 : partner}
                        alt=""
                    />
                </a>
            ))}
        </div>
    );
}



export default CopInfo;