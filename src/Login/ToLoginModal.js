import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './LoginUI.css';
import { BsFillPersonFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";




function ToLoginModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="contents">
                    <div>
                        <div className="personIcon"><BsFillPersonFill size="100"/></div>
                        <input className="name" type="text" placeholder="ID" />
                    </div>
                    <div className="second-input">
                        <input type="password" placeholder="PW" className="name"/>
                    </div>
                    <div className="login-button">
                        <button>Login</button>
                        <div>login with</div>
                        <div className="loginIcons">
                            <div><FcGoogle size = "25"/></div>
                            <div><GoMarkGithub size = "25"/></div>
                            <div><RiKakaoTalkFill size = "25"/></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ToLoginModal;