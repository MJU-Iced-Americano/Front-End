import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './../FAQ/FAQPage.css';
import Header from '../component/Header/Header';
import Footer from "../component/Footer/Footer";
import { useNavigate } from "react-router-dom";




function FAQPage(){
    const navigate = useNavigate();

    const navigateToRegular = () => {
        navigate("/RegularFAQ");
  };
    const navigateToEdu = () => {
        navigate("/EduFAQ");
  };
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
            <div>
            <Accordion className = "accWhole" defaultActiveKey="0" flush>
              <Accordion.Item className="item">
                <Accordion.Header className="question">Q1. 동영상이 재생이 안됩니다. </Accordion.Header>
                <Accordion.Body>
                  다시 한번 시도해보세요.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="item" eventKey="1">
                <Accordion.Header>Q2. 신청한 강의를 환불받고 싶어요! </Accordion.Header>
                <Accordion.Body>
                  FAQ/문의로 환불 요청을 해주시면 됩니다.
                  환불은 소코아 이용약관 내 환불 규정에 따라 진행 됩니다.

                  카드 또는 계좌 입금 환불이 완료 될 때까지는 영업일 기준으로 3~5일 정도가 소요됩니다.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="item" eventKey="2">
                <Accordion.Header>Q3. 관심있는 분야 태그를 변경하고 싶어요. </Accordion.Header>
                <Accordion.Body>
                  마이페이지에서 변경하실 수 있습니다.
                   -> 마이페이지 바로가기
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="item" eventKey="3">
                <Accordion.Header>Q4. 왜 그런거죠? </Accordion.Header>
                <Accordion.Body>
                  마이페이지에서 변경하실 수 있습니다.
                   -> 마이페이지 바로가기
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="item" eventKey="4">
                <Accordion.Header>Q5. 이건 어떻게 하면 좋을까요? </Accordion.Header>
                <Accordion.Body>
                  마이페이지에서 변경하실 수 있습니다.
                   -> 마이페이지 바로가기
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
        </div>
       </div>

       <Footer/>
       </div>
      );
}

export default FAQPage;

