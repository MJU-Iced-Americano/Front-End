import React, {useState} from 'react';
import "./styles/OperatorCoOp.css"
import Body from "../../components/Body/Body";
import OperatorcoOpAddService from "./OperatorCoOpAddService"

const OperatorCoOpAdd=()=>{

    const OperatorCoOpAddContent =()=>{
        const [doEnroll, setDoEnroll] = useState(false);

        const [inputs, setInputs] = useState({
            co_company_name : '',
            coCompany_photo_url:'',
            co_company_url : ''
        });

        const {co_company_name, coCompany_photo_url,  co_company_url} = inputs;

        const onChange =(e) => {
            const{value, name} = e.target;
            setInputs({
                ...inputs,
                [name] : value
            })
        }

        // const ClickChange =() => {
        //     const formData = new FormData();  // formData 생성
        //
        //     console.log(co_company_name);
        //     console.log(co_company_url);
        //     formData.append('coCompany_name', co_company_name);
        //     formData.append('coCompany_url', co_company_url);
        //     formData.append('image', coCompany_photo_url);
        //
        //     for (let key of formData.keys()) {
        //         console.log(key, ":", formData.get(key));
        //     }
        // }

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "등록하기";
        }

        return (
            <div className="CoOpManage">
                <h1>회사 협력사 추가 페이지입니다.</h1>
                <div className="inputCoOpDiv">
                    <input name="co_company_name" placeholder="협력사 기업명을 적으시오" onChange={onChange} value={co_company_name} className="inputCoOpInfo" type='text'/>
                    <input name="coCompany_photo_url" accept='image/jpg, image/jpeg, image/png' placeholder="협력사 기업 사진을 넣으세요" onChange={onChange} value={coCompany_photo_url} className="inputCoOpInfoFile" type="file"/>
                    <input name="co_company_url" placeholder="협력사 페이지 URL을 적으시오" onChange={onChange} value={co_company_url} className="inputCoOpInfo" type='text'/>

                </div>
                <div>
                    <button className="inCoOpButton"onClick={()=> setDoEnroll(!doEnroll)} >{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorcoOpAddService co_company_name={co_company_name} coCompany_photo_url={coCompany_photo_url} co_company_url={co_company_url} />:<p></p>}
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

