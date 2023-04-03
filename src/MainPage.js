import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import BannerSlider from "./component/Banner/BannerSlider";
import LectureSlider from "./component/Banner/LectureSlider";
import './MainPage.css';

const MainPage=() => {
    return(
        <div className="root">
            <Header/>
            <div className="contentBox">
                <div className="searchArea">
                    <div className="searchField">
                        <input className="searchInput"/>
                    </div>
                    <div className="searchTag">
                        <div className="searchTagSmall">
                            <a href='/'>#k8s</a>
                            <a href='/'>#spring</a>
                            <a href='/'>#java</a>
                            <a href='/'>#chatGPT</a>
                        </div>
                    </div>
                </div>
                <BannerSlider className="eventBannerBox"></BannerSlider>
                <div className="lectureRecommendBox">
                    <LectureSlider/>
                </div>
                <div className="lectureRecommendBox">
                    <LectureSlider/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;