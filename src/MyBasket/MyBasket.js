import './styles/MyBasket.css';
import React, {useCallback} from "react";
import Body from "../components/Body/Body";
import lecture1 from "../assets/MyBasket/lecture01.png";
import { useState } from 'react';


const MyBasket =()=>{
    const [checkedItems, setCheckedItems] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const checkedItemHandler = (value, isChecked) => {
        if (isChecked) {
            checkedItems.add(value);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(value)) {
            checkedItems.delete(value);
            setCheckedItems(checkedItems);
        }
    };

    const chceckHandelr = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setIsChecked(!isChecked);
        checkedItemHandler(value, e.target.checked);


        console.log(value, e.target.checked);
    }

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
                        <td>5일 안에 끝내는 파이썬 기초 문법</td>
                        <td>에드워드 킴</td>
                        <td>38,900 원</td>
                        <td><input
                            type={"checkbox"}
                            value={"5일 안에 끝내는 파이썬 기초 문법"}
                            checked={checkedItems.includes("5일 안에 끝내는 파이썬 기초 문법")}
                            onChange={(e) => chceckHandelr(e, "5일 안에 끝내는 파이썬 기초 문법")}
                        /></td>
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
                <div id="selectItems">
                    <div>상품 전체 선택</div>
                    <div>상품 선택 해지</div>
                    <div>선택 상품 삭제</div>
                </div>
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