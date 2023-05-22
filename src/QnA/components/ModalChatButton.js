import '../styles/QnADetailPage.css';
import report from "../../assets/QnA/Report.png";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";

function ModalButton(index) {
    const [show, setShow] = useState(false);
    const [type, setType] = useState('');
    const [complaintContent, setComplaintContent] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const handleChange = (event) => {
        setComplaintContent(event.target.value);
    };

    return(
        <div className="ReportDiv">
            <Button className="ReportButton"  variant="outline-link" onClick={handleShow}><img className="ChatReport"src={report}/></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="ReportNameMain">게시물 신고하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="ReportContent">
                        <p className="ReportName">신고 이유</p>
                        <select className="TypeSelect" value={type} onChange={handleChangeType}>
                            <option value="HATE_SPEECH">부적절한 언어</option>
                            <option value="PROFANITY">비속어 및 욕설 사용</option>
                            <option value="SPAM">스팸</option>
                            <option value="ILLEGAL_CONTENT">부적절한 게시물</option>
                            <option value="ETC">기타</option>
                        </select>
                    </div>
                    <div className="ReportContent">
                        <p className="ReportName">상세 내용</p>
                        <textarea
                            onChange={handleChange}
                            className="ComplaintContent"
                            placeholder="내용을 입력해주세요"
                            value={complaintContent}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="BtnModal" variant="secondary" onClick={handleClose}>
                        신고하기
                    </Button>
                    <Button className="BtnModal" variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default ModalButton;
