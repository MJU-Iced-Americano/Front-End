import './styles/MyBasket.css';
import React from "react";
import Body from "../components/Body/Body";
import lecture1 from "../assets/MyBasket/lecture01.png";



const MyBasket =()=>{

    const BasketContent =()=>{
        return(
            <div className="whole">
                <h1 id="head">장바구니</h1>
                <table className="basketTable">
                    <thead>
                    <tr>
                        <th colSpan="2">강의명</th>
                        <th>강사명</th>
                        <th>가격</th>
                        <th>선택</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td><div className="imgDiv"><img src={lecture1}/></div></td>
                        <td>5일 안에 끝내는 파이썬 기초 문법 </td>
                        <td>에드워드 킴</td>
                        <td>38,900 원</td>
                        <td><input type={"checkbox"}/></td>
                    </tr>
                    <tr>
                        <td><div className="imgDiv"><img src={lecture1}/></div></td>
                        <td>5일 안에 끝내는 파이썬 기초 문법 </td>
                        <td>에드워드 킴</td>
                        <td>38,900 원</td>
                        <td><input type={"checkbox"}/></td>
                    </tr>
                    </tbody>
                </table>

                <div id="payment">
                    <div className="paymentBtn">결제하기</div>
                </div>
            </div>
        )
    }


    return(
        <Body>
            <BasketContent />
        </Body>
    );

}

export default MyBasket;