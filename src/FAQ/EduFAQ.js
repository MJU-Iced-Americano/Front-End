import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles/FAQPage.css';
import Body from "../components/Body/Body";



const EduFAQ = () => {
    const EduFAQContent=()=> {
        return(
            <div className="whole">
                <div><h1 className = "regularTitle">교육 FAQ</h1></div>
                <div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item className="item">
                            <Accordion.Header>Q1. 동영상이 재생이 안됩니다. </Accordion.Header>
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
        );
    }
  return(
        <Body>
            <EduFAQContent/>
        </Body>
    )
};



export default EduFAQ;
