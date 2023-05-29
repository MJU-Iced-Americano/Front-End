import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles/FAQPage.css';
import Body from "../components/Body/Body";
import axios from "axios";



const RegularFAQ = () => {
    const RegularFAQContent=()=> {
        const [data, setData] = useState([]);
        useEffect(() => {

            axios.get(`http://3.34.240.33:8080/board-service/faq/show/listFaqGeneral`)

                .then(response => {
                    // response.data는 가져온 데이터를 의미합니다.
                    console.log(response.data);
                    const data = response.data;
                    const objects = [];

                    // 데이터에서 객체를 추출하여 배열에 추가
                    for (let i = 0; i < data.list.length; i++) {
                        const obj = {
                            faqIndex: data.list[i].faqIndex,
                            faqTitle: data.list[i].faqTitle,
                            faqContent: data.list[i].faqContent
                        };
                        console.log(obj);
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
        return(
            <div className="whole">

                <div><h1 className = "regularTitle">일반회원 FAQ</h1></div>
                <div className = "acc_wrapper">
                    <Accordion className = "accWhole" defaultActiveKey="0" flush>

                        {data.map((item, i) => (
                            <Accordion.Item key={item.faqIndex} className="item" eventKey={i}>
                                <Accordion.Header className="question"> Q{++i}.<div className="blank"></div>{item.faqTitle}</Accordion.Header>
                                <Accordion.Body>x
                                    {item.faqContent}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>

            </div>
        );
    }
  return(
        <Body>
            <RegularFAQContent/>
        </Body>
    )
};



export default RegularFAQ;
