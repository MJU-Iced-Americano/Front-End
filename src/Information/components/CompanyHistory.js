import axios from 'axios';
import {useState, useEffect, useRef} from "react";
import { useCookies } from 'react-cookie';
import "../styles/Info.css"

const CompanyHistory = () => {

    return (
        <table>
            <tbody>
            <tr className="HistoryYear">
                <td className="CompanyYears"> 2019</td>
                <td>
                    <tr>
                        <tr className="CompanyMonth">12</tr>
                        <tr>한국대학평가원 대학기관평가인증 획득</tr>
                    </tr>
                    <tr>
                        <tr className="CompanyMonth">08</tr>
                        <tr>한국인터넷진흥원 주관 정보보호관리체계 인증 획득</tr>
                    </tr>
                </td>
            </tr>
            <tr className="HistoryYear">
                <td className="CompanyYears"> 2018</td>
                <td>
                    <tr>
                        <tr className="CompanyMonth">04</tr>
                        <tr>교육부 및 국가평생교육진흥원 주관 2018년 대학의 평생교육체제 지원사업 선정</tr>
                        <tr>한국전력공사 주관 에너지 거점대학 클러스트 사업 선정</tr>
                        <tr>인문캠퍼스 부지개발위원회 폐지 및 인문캠퍼스 부지개발관리본부 신설</tr>
                    </tr>
                    <tr>
                        <tr className="CompanyMonth">03</tr>
                        <tr>ICT융합대학 자연캠퍼스 교학팀 신설</tr>
                        <tr>자연캠퍼스 국제학부 교학팀 신설 부속기관으로 ‘산학인재개발원’과 그 하부조직으로 ‘듀얼공동훈련센터’ 신설.</tr>
                        <tr>자연캠퍼스 학생경력개발처의 하부조직인 ‘IPP사업운영팀’ 및 ‘장기현장실습센터’를 부속기관인 산학인재개발원 하부조직으로 이동</tr>
                    </tr>
                </td>
            </tr>

            </tbody>
        </table>
    );
}



export default CompanyHistory;