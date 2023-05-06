import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorQnADeleteService from "../QnAManage/OperatorQnADeleteService";

const OperatorCoOpDelete=()=>{

    const OperatorCoOpDeleteContent =()=>{
        const [faqIndex, setFaqIndex] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChange =(e) => {
            setFaqIndex(e.target.value);
        }

        const onReset=()=>{
            setFaqIndex('');
        }

        return (
            <div className="CoOpManage">
                <h1>QnA 삭제 페이지입니다.</h1>
                <div>
                    <input placeholder="QnA faqindex를 적으시오" onChange={onChange} value={faqIndex} className="inputStyle" type='number'/>
                </div>
                <div>
                    <button onClick={()=> {setDoEnroll(!doEnroll);}}>삭제하기</button>
                    {doEnroll===true?<OperatorQnADeleteService faqIndex={faqIndex} />:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpDeleteContent/>
        </Body>
    );
}

export default OperatorCoOpDelete;

