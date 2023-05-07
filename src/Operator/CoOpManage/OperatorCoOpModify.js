import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorCoOpModifyService from "./OperatorCoOpModifyService";

const OperatorCoOpModify=()=>{

    const OperatorCoOpModifyContent =()=>{
        const [companyIndex, setCompanyIndex] = useState('');
        const [companyName, setCompanyName] = useState('');
        const [companyURL, setCompanyURL] = useState('');
        const [doEnroll, setDoEnroll] = useState(false);

        const onChangeIndex =(e) => {
            setCompanyIndex(e.target.value);
        }
        const onChangeName =(e) => {
            setCompanyName(e.target.value);
        }
        const onChangeURL =(e) => {
            setCompanyURL(e.target.value);
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 수정 페이지입니다.</h1>
                <div>
                    <input placeholder="CoOp index를 적으시오" onChange={onChangeIndex} value={companyIndex} className="inputCoOpInfo" type='number'/>
                    <input placeholder="CoOp Name를 적으시오" onChange={onChangeName} value={companyName} className="inputCoOpInfo" type='text'/>
                    <input placeholder="CoOp url을 적으시오" onChange={onChangeURL} value={companyURL} className="inputCoOpInfo" type='text'/>
                </div>
                <div>
                    <button className="inCoOpButton" onClick={()=> {setDoEnroll(!doEnroll);}}>수정하기</button>
                    {doEnroll===true?<OperatorCoOpModifyService companyIndex={companyIndex} companyName={companyName} companyURL={companyURL}/>:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpModifyContent/>
        </Body>
    );
}

export default OperatorCoOpModify;

