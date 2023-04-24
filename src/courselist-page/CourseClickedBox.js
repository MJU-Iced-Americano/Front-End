import React from "react";
import {BsSearch} from "react-icons/bs";
const CourseClickedBox=()=> {
    // const[xBtn, isXBtn] = useState(false);
    const HistoryList=({keyword})=> {
        return (
            <div id="searchHistoryList">
                <BsSearch/>
                <a href="/courseList">{keyword}</a>
                <a href="javacsript:void(0)">x</a>
            </div>
        );
    }

    return(
        <div className="course-search-bar-under">
            <div className="course-search-bar-under-resent-history">최근 검색 기록</div>
            <div className="course-search-bar-under-resent-history-lists">
                <HistoryList keyword= "java"/>
                <HistoryList keyword= "java"/>
                <HistoryList keyword= "java"/>
            </div>
            <div className="course-search-bar-under-resent-history-clear"><a href="javacsript:void(0)">전체 삭제</a></div>
        </div>
    );
}

export default CourseClickedBox;