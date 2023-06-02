import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import OperatorBannerAddService from "./OperatorBannerAddService";

const OperatorAddBanner=()=>{

    const OperatorAddBannerContent =()=>{
        const [doEnroll, setDoEnroll] = useState(false);

        const [photo, setPhoto] = useState();

        function btnTextChanger(){
            if (doEnroll) {
                return "확인";
            }
            else return "등록하기";
        }

        const onImageHandler = (event) => {
            setPhoto(()=>event.target.files[0]);

        };

        return (
            <div className="CoOpManage">
                <h1>배너 추가 페이지입니다.</h1>
                <h4>배너 Size: 1920 * 400</h4>
                <input name="imageUrl" accept='image/*' placeholder="배너 사진을 넣으세요" onChange={onImageHandler} className="inputCoOpInfo" type="file"/>
                <div>
                    <button className="inCoOpButton"onClick={()=> setDoEnroll(!doEnroll)} >{btnTextChanger()}</button>
                    {doEnroll===true?<OperatorBannerAddService photo={photo} />:<p></p>}
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

