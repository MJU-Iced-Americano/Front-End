//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';
import axios from 'axios';
//import ModalBasic from '../src/common/ModalBasic';

export default function MainLoginPage() {
    const movePage = useNavigate();
    function goName(){
        movePage('/user/Name');
    }

    function goToLoginModal(){
        movePage('/user/login');
    }
    return (

        <div className="Main">
            홈 입니다.
            첫 페이지
            <button onClick={goName}>네임으로이동</button>
            <button onClick={goToLoginModal}>팝업으로이동</button>
        </div>
    );
}