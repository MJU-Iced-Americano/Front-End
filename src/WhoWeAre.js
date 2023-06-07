import React from "react";
import Body from "./components/Body/Body";
import './WhoWeAre.css';
const WhoWeAre=()=> {
    const NameLabel=({name, role})=>{

        return(
            <div className="NameLabel">
                <div className="NamePart">{name} : </div>
                <div> {role}</div>
            </div>
        );
    }
    const WhoWeAreContent=()=> {
        return(
          <div className="NameLabelArea">
              <NameLabel name="김유비" role="Framework Leader, Server Developer"/>
              <NameLabel name="김자윤" role="Web Developer"/>
              <NameLabel name="노희진" role="Server Developer"/>
              <NameLabel name="류채현" role="Framework Leader, Server Developer"/>
              <NameLabel name="여다은" role="Server Developer"/>
              <NameLabel name="유은서" role="PM, Web Developer"/>
              <NameLabel name="이상민" role="DB Developer, Server Developer"/>
              <NameLabel name="전민근" role="Web Developer"/>
              <NameLabel name="최윤식" role="Architect, Server Developer"/>
              <NameLabel name="한승헌" role="PM, QA, Web Developer"/>
              <NameLabel name="김소철" role="Architect, Advisor"/>
          </div>
        );
    }

    return(
        <Body>
            <WhoWeAreContent/>
        </Body>
    )
}

export default WhoWeAre;