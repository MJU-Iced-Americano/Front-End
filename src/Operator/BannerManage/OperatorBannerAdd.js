import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorBannerAddService from "./OperatorBannerAddService";

const OperatorAddBanner=()=>{

    const OperatorAddBannerContent =()=>{
        const [doEnroll, setDoEnroll] = useState(false);

        const [inputs, setInputs] = useState({
            imageUrl : '',
        });

        const {imageUrl} = inputs;



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
                <h1>배너 추가 페이지입니다.</h1>
                <h4>배너 Size: 1920 * 400</h4>
                <input name="imageUrl" accept='image/jpg, image/jpeg, image/png' placeholder="배너 사진을 넣으세요" onChange={onChange} value={imageUrl} className="inputCoOpInfo" type="file"/>
                <div>
                    <button className="inCoOpButton"onClick={()=> setDoEnroll(!doEnroll)} >{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorBannerAddService imageUrl={imageUrl} />:<p></p>}
                </div>
            </div>

        );
    }

    return(
        <Body>
            <OperatorAddBannerContent/>
        </Body>
    );
}

export default OperatorAddBanner;

