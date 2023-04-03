import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import LoginModal from "./login/ToLoginModal";


function MainLoginPage() {
    const movePage = useNavigate();
    function goName() {
        movePage('/Name');
    }
    return (
        <>
            <div className="Main">
                첫 페이지
                <button onClick={goName}>네임으로이동</button>
                <LoginModal></LoginModal>
            </div>
        </>
    );
}

export default MainLoginPage;