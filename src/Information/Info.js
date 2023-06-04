import './styles/Info.css';
import NaverMap from "./components/NaverMap";
import image from '../assets/information/company.JPG'
import partner from '../assets/information/partner.JPG'
import partner2 from '../assets/information/partner2.JPG'
import {useState} from "react";
import Body from "../components/Body/Body";
import CopInfo from "./CopInfo";
import CompanyHistory from "./components/CompanyHistory";

function Info() {
    const [isListHover, setIsListHover] = useState(false);

    const InfoContent=()=> {
        return(
            <section style={{backgroundImage: `url(${image})`}}>
                <div className={"content"}>
                    <h1>회사소개</h1>
                    <br></br>
                    <p><strong>명지대학교</strong>는 기독교 진리에 기초한 반세기 역사와 전통을 이어온 신실한 기독교 대학으로 사랑, 진리, 봉사의 대학이념을 실현하며 발전해 왔습니다.
                        우리대학교는 하나님을 섬기고, 예수님의 참사랑을 본받고 실천하여 인류와 사회에 봉사하는 대학교로 기독교의 진리를 실천하는 지도자를 양성하는 것을 교육의 첫째 목표로 삼고 있습니다.</p>
                        <br></br>
                    <p>또한 활동 무대를 전 세계로 넓히고 세계화, 국제화시대를 당당히 선도해 나갈 전문인을 양성하고자 합니다. 이를 위해 첨단 과학기술을 선도하는 교육기관과 세계 석학들과의 긴밀한 협조체계를 구축하는 등 국제화된 교육·연구·학술 활동으로 거듭날 것입니다.</p>
                        <br></br>
                    <p>>치열한 국제 경쟁 환경 속에서 남보다 앞선 전문인을 양성하고 이를 뒷받침할 수 있는 교육과 연구가 이루어지도록 기초 학문을 철저히 교육하고 미래 사회에 능동적으로 대처할 수 있는 총체적인 교육을 펼쳐 나갈 것입니다.</p>
                        <br></br>
                        <p>내실 있는 교육과 탁월한 연구, 그리고 예수님의 참 사랑을 실천하는 봉사활동으로 세계속의 명지대학교를 건설하고 세계평화와 인류문화발전에 기여하는 성실 유능한 인재를 양성하기 위해 책임과 사명을 다할 것입니다. </p>
                    <br></br>
                    <h1>회사 연혁</h1>
                    <br></br>
                    <CompanyHistory />
                    <br></br>
                    <h1>회사 위치</h1>
                    <br></br>
                    <NaverMap/>
                    <br></br>
                    <h1>협력사</h1>
                    <div className={"Partner"}>
                        <CopInfo />
                    </div>
                </div>
            </section>
        );
    }
    return (
        <Body>
            <InfoContent/>
        </Body>
    );
}



export default Info;