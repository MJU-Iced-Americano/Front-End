import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../components/Body/Body";
import "./styles/OperatorMain.css"

const OperatorMain=()=>{
    const navigate = useNavigate();

    const OperatorMainContent =()=>{

        const addCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Add");
        };
        const modifyCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Modify");
        };
        const deleteCoOpPage = () => {
            navigate("/OperatorPage/CoOpManage/Delete");
        };

        const addBannerPage = () => {
            navigate("/OperatorPage/BannerManage/Add");
        };
        const deleteBannerPage = () => {
            navigate("/OperatorPage/BannerManage/Delete");
        };

        const handleFAQPage = () => {
            navigate("/OperatorPage/OperatorFAQList");
        };

        const deleteQnAPage = () => {
            navigate("/OperatorPage/QnAManage/Delete");
        };

        const ReportQnAPage = () => {
            navigate("/OperatorPage/ReportManage/ReportQnA");
        };
        const ReportCommendPage = () => {
            navigate("/OperatorPage/ReportManage/ReportCommend");
        };

        return (
            <div className="Operatormain">
                <div className="OperatorMainDiv">Socoa 운영자 페이지입니다.</div>
                <div className="OperatorMenuDiv">
                    <div className="ElseMenuDiv">
                        <div className="CompanyServiceMenuDiv">
                            <div className="CoOpMenuDiv">
                                <div className="CoOpNavigateDiv" onClick={addCoOpPage}>회사 협력사 추가하기</div>
                                <div className="CoOpNavigateDiv" onClick={modifyCoOpPage}>회사 협력사 수정하기</div>
                                <div className="CoOpNavigateDiv" onClick={deleteCoOpPage}>회사 협력사 삭제하기</div>
                            </div>
                            <div className="BannerMenuDiv">
                                <div className="BannerNavigateDiv" onClick={addBannerPage}>배너 추가하기</div>
                                <div className="BannerNavigateDiv" onClick={deleteBannerPage}>배너 삭제하기</div>
                            </div>
                        </div>
                        <div className="CommunityMenuDiv">
                            <div className="FAQMenuDiv" onClick={handleFAQPage}>
                                FAQ 관리하기
                            </div>
                            <div className="QnAMenuDiv" onClick={deleteQnAPage}>
                                QnA 삭제하기
                            </div>
                        </div>
                    </div>
                    <div className="ReportMenuDiv">
                        <div>
                            <div className="ReportNavigateDiv" onClick={ReportQnAPage}>게시물 신고 관리하기</div>
                            <div className="ReportNavigateDiv" onClick={ReportCommendPage}>댓글 신고 관리하기</div>
                            <div className="ReportNavigateDiv" onClick={ReportCommendPage}>강의리뷰 신고 관리하기</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorMainContent/>
        </Body>
    );
}

export default OperatorMain;

