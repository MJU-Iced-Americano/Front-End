import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './styles/CourseListPage.css';
import SearchResultText from './CourseSearchResult';
import ClickedBox from './CourseClickedBox';
import React, {useState} from "react";
import {BsSliders} from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import lecture01 from "../assets/Banner/lecture01.png";

const CourseListPage =()=> {
    // const[inputs, setInputs] = useState("");
    const[clicked, isClicked] = useState(false);
    const[inputs, setInputs] = useState("");
    const[searchStart, setSearchStart] = useState(false);
    const[tagCatClicked, isTagCatClicked] = useState(false);
    const[filterClicked, isFilterClicked] = useState(false);

    const activeEnter =(e)=> {
        if(e.key === 'Enter'){
            setSearchStart(true);
            isClicked(false);
        }
        if(e.key ==='Escape'){
            isClicked(false);
        }
    }

    const TagBox=({keyword})=> {
        return (
            <a href='/courseList'>
                <div className="search-tag-box">
                    #{keyword}
                </div>
            </a>
        );
    }

    return(
        <div>
            <Header/>
            <div className="course-content">
                <div className="search-course-bar">
                    <input className="course_search_bar" type="text" placeholder = "듣고 싶은 강의가 무엇인가요?"
                           onClick={()=> {
                               isClicked(!clicked);
                           }}
                           value={inputs}
                           onChange={(e) =>
                           {setInputs(e.target.value)
                               setSearchStart(false)}
                           }
                           onKeyDown={(e)=>activeEnter(e)}
                    />
                    {clicked && <ClickedBox/>}
                </div>
                <div className="course-content-whole">
                    <div className="course-side-nav-bar">
                        <div className="course-side-nav-bar-item"><a href="/">전체 강의</a></div>
                        <div className="course-side-nav-bar-item"><a href="/">개발·프로그래밍</a></div>
                        <div className="course-side-nav-bar-item"><a href="/">게임 개발</a></div>
                        <div className="course-side-nav-bar-item"><a href="/">보안·네트워크</a></div>
                    </div>
                    <div className="course-content-lists">
                        <div className="course-search-result">
                            <div className="course-search-result-message">
                                {searchStart&&<SearchResultText result={inputs}/>}
                            </div>
                            <div className="course-search-main-tag">
                                <div className="course-search-result-tag">
                                    <BsSliders id="iconTag" onClick={()=>{
                                        isTagCatClicked(!tagCatClicked);
                                    }}/>
                                    <TagBox keyword="java"/>
                                    <TagBox keyword="k8s"/>
                                    <TagBox keyword="chatGPT"/>
                                    <TagBox keyword="spring"/>
                                    <div className="search-dropdown-filter">
                                        <label className="dropdown-label" onClick={()=>{
                                            isFilterClicked(!filterClicked)
                                        }}>
                                            <div>필터</div>
                                            <FaAngleDown className="dropdown-icon"/>
                                        </label>
                                        {filterClicked&&
                                            <div className="dropdown-content">
                                                <ul>
                                                    <li>조회수 높은 순</li>
                                                    <li>정확도 순</li>
                                                    <li>인기도 순</li>
                                                    <li>리뷰 별점 순</li>
                                                    <li>최신 순</li>
                                                    <li>난이도 순</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {tagCatClicked&&
                                    <div className="course-search-result-tag-under">
                                        <TagBox keyword="java"/>
                                        <TagBox keyword="k8s"/>
                                        <TagBox keyword="chatGPT"/>
                                        <TagBox keyword="spring"/>
                                        <TagBox keyword="java"/>
                                        <TagBox keyword="k8s"/>
                                        <TagBox keyword="chatGPT"/>
                                        <TagBox keyword="spring"/>
                                        <TagBox keyword="java"/>
                                        <TagBox keyword="k8s"/>
                                        <TagBox keyword="chatGPT"/>
                                        <TagBox keyword="spring"/>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="course-lists-all">
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                            <div className="lecture-Tile-lists">
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                                <div className="lecture-Tile">
                                    <a href='/'><img src={lecture01} className="lectureImg" alt="lecture1"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default CourseListPage;