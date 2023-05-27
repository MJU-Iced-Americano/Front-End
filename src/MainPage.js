import BannerSlider from "./components/Banner/BannerSlider";
import LectureSlider from "./components/Banner/LectureSlider";
import './MainPage.css';
import Body from "./components/Body/Body";
import React from "react";

const MainPage=() => {
    const MainPageContent=()=>{
        return(
            <div className="contentBox">
                <div className="searchArea">
                    <div className="searchField">
                        <input className="searchInput"/>
                    </div>
                    <div className="searchTag">
                        <div className="searchTagSmall">
                            <a href="/">#k8s</a>
                            <a href='/'>#spring</a>
                            <a href='/'>#java</a>
                            <a href='/'>#chatGPT</a>
                        </div>
                    </div>
                </div>
                <BannerSlider className="eventBannerBox"></BannerSlider>
                <div className="lectureRecommendBox">
                    <LectureSlider name = "likeSum">Best 강의 👍</LectureSlider>
                    <LectureSlider name = "createdAt">New 강의 🎉</LectureSlider>
                    <LectureSlider name = "hits" >Trending 강의 🔥</LectureSlider>
                </div>
            </div>
        );
    }

    return(
            <Body>
                <MainPageContent/>
            </Body>
    )
}

export default MainPage;