import React, {useState} from 'react';
import "./styles/OperatorCoOp.css"
import Body from "../../components/Body/Body";
import OperatorcoOpAddService from "./OperatorCoOpAddService"

const OperatorCoOpAdd=()=>{

    const OperatorCoOpAddContent =()=>{
        const [doEnroll, setDoEnroll] = useState(false);

        const [inputs, setInputs] = useState({
            co_company_name : '',
            co_company_url : '',
        });

        const {co_company_name, co_company_url} = inputs;

        const onChange =(e) => {
            const{value, name} = e.target;
            setInputs({
                ...inputs,
                [name] : value
            })
        }

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "등록하기";
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 추가 페이지입니다.</h1>
                <div>
                    <input name="co_company_name" placeholder="협력사 기업명을 적으시오" onChange={onChange} value={co_company_name} className="inputCoOpInfo" type='text'/>
                    <input name="co_company_url" placeholder="협력사 페이지 URL을 적으시오" onChange={onChange} value={co_company_url} className="inputCoOpInfo" type='text'/>
                </div>
                <div>
                    <button className="inCoOpButton"onClick={()=> setDoEnroll(!doEnroll)}>{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorcoOpAddService co_company_name={co_company_name} co_company_url={co_company_url} />:<p></p>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorCoOpAddContent/>
        </Body>
    );
}

export default OperatorCoOpAdd;

