import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorCoOpDeleteService from "../CoOpManage/OperatorCoOpDeleteService";

const OperatorCoOpDelete=()=>{

    const OperatorCoOpDeleteContent =()=>{
        const [companyIndex, setCompanyIndex] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChange =(e) => {
            setCompanyIndex(e.target.value);
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 삭제 페이지입니다.</h1>
                <div>
                    <input placeholder="Company index를 적으시오" onChange={onChange} value={companyIndex} className="inputStyle" type='number'/>
                </div>
                <div>
                    <button onClick={()=> {setDoEnroll(!doEnroll);}}>삭제하기</button>
                    {doEnroll===true?<OperatorCoOpDeleteService companyIndex={companyIndex} />:<p></p>}
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

