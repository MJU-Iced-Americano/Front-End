import React, { useState } from 'react';
import Body from "../components/Body/Body";
import lecture01 from "../assets/Banner/lecture01.png";
import "./styles/MyBasket.css";

function MyBasket() {
    const [items, setItems] = useState([
        { id: 1, name: 'React 강의', teacher: '에드워드 킴', price: 20000, selected: false, imageUrl: 'lecture01' },
        { id: 2, name: 'JavaScript 강의', teacher: '에드워드 킴', price: 15000, selected: false, imageUrl: 'lecture01' },
        { id: 3, name: 'HTML/CSS 강의', teacher: '에드워드 킴', price: 10000, selected: false, imageUrl: 'lecture01' },
    ]);


    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const selectAllText = selectAll ? "전체 취소" : "전체 선택";

    const handleSelectAll = () => {
        const updatedItems = items.map((item) => {
            return { ...item, selected: !selectAll };
        });
        setItems(updatedItems);
        setSelectAll(!selectAll);
    };

    const handleDelete = () => {
        const remainingItems = items.filter((item) => !item.selected);
        setItems(remainingItems);
        setSelectAll(false);
    };

    const total = items.reduce((acc, item) => {
        if (item.selected) {
            return acc + item.price;
        }
        return acc;
    }, 0);

    const MyBasketContent = () => {
        return(
            <div className={"whole"}>
                <h1 id="basketHead">장바구니</h1>
                <table className={"my-basket-table"}>
                    <thead>
                    <tr>
                        <th colSpan={2}>강의명</th>
                        <th>강사명</th>
                        <th>가격</th>
                        <th>선택 여부</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={lecture01} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.teacher}</td>
                            <td>{item.price}원</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className={"select"}>
                    <button className={"my-basket-button"} onClick={handleSelectAll}>{selectAllText}</button>
                    <button className={"my-basket-button"} onClick={handleDelete}>선택한 항목 삭제</button>
                </div>
                <div className={"payment"}>
                    <div><span>총 가격: {total}원</span></div>
                    <button className={"my-basket-button"} > 결제하기</button>
                </div>
            </div>
        );
    }

    return (
        <Body>
            <MyBasketContent />
        </Body>
    );
}

export default MyBasket;
