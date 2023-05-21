import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles/FAQPage.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function FAQPage(){
    const navigate = useNavigate();
    const [word, setWord] =useState("");

    const onSubmit = async () => {
        window.location.href = "/search/"
    }

    const navigateToRegular = () => {
        navigate("/RegularFAQ");
  };
    const navigateToEdu = () => {
        navigate("/EduFAQ");
  };
    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get(`/board-service/faq/show/Home`)

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

    return (
        <div>
        <Header />
        <div className="whole">
            <div className="search_wrapper">
                 <input className="search_bar" type="text" placeholder = "무엇이 궁금하신가요?"></input>
             </div>
             <div className="categories">
                 <div><button type="button" onClick={navigateToRegular} className="btn btn-outline-secondary"><div>일반회원 FAQ</div></button></div>
                 <div><button type="button" onClick={navigateToEdu} className="btn btn-outline-secondary"><div>교육 FAQ</div></button></div>
            </div>
            <div>
                <h3 className="topTitle">[ 자주 묻는 질문 TOP5 ]</h3>
            </div>
            <div className = "acc_wrapper">
                <Accordion className = "accWhole" defaultActiveKey="0" flush>

                {data.map((item, i) => (
                        <Accordion.Item key={item.faqIndex} className="item" eventKey={i}>
                            <Accordion.Header className="question"> Q{++i}. {item.faqTitle}</Accordion.Header>
                            <Accordion.Body>
                                {item.faqContent}
                            </Accordion.Body>
                        </Accordion.Item>
                            ))}
                        </Accordion>
            </div>
           </div>

       <Footer/>
       </div>
      );
}

export default FAQPage;

