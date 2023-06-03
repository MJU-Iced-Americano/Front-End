import React, {useState} from 'react';
import "./styles/OperatorCoOp.css"
import Body from "../../components/Body/Body";
import OperatorcoOpAddService from "./OperatorCoOpAddService"

const OperatorCoOpAdd=()=>{

    const OperatorCoOpAddContent =()=>{
        const [doEnroll, setDoEnroll] = useState(false);

        const [photo, setPhoto] = useState();

        const [inputs, setInputs] = useState({
            CoCompany_name : '',
            CoCompany_url : ''
        });

        const {CoCompany_name,  CoCompany_url} = inputs;

        const onChange =(e) => {
            const{value, name} = e.target;
            setInputs({
                ...inputs,
                [name] : value
            })
        }

        const onImageHandler = (event) => {
            setPhoto(()=>event.target.files[0]);

        };

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
                <div>
                    <input name="CoCompany_name" placeholder="협력사 기업명을 적으시오" onChange={onChange} value={CoCompany_name} className="inputCoOpInfo" type='text'/>
                    <input accept='image/*' placeholder="협력사 기업 사진을 넣으세요" onChange={onImageHandler} className="inputCoOpInfo" type="file"/>
                    <input name="CoCompany_url" placeholder="협력사 페이지 URL을 적으시오" onChange={onChange} value={CoCompany_url} className="inputCoOpInfo" type='text'/>

                </div>
                <div>
                    <button className="inCoOpButton"onClick={()=> setDoEnroll(!doEnroll)} >{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorcoOpAddService CoCompany_name={CoCompany_name} image={photo} CoCompany_url={CoCompany_url}/>:<p></p>}
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

