import './styles/CourseListPage.css';
import SearchResultText from './CourseSearchResult';
import ClickedBox from './CourseClickedBox';
import React, {useCallback, useEffect, useState} from "react";
import {BsSliders} from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import lecture01 from "../assets/Banner/lecture01.png";
import Body from "../components/Body/Body";
import axios from "axios";
import {Link} from "react-router-dom";

const CourseListPage =()=> {
    // const[inputs, setInputs] = useState("");
    const[clicked, isClicked] = useState(false);
    const[inputs, setInputs] = useState("");
    const[searchStart, setSearchStart] = useState(false);
    const[tagCatClicked, isTagCatClicked] = useState(false);
    const[filterClicked, isFilterClicked] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        getCoursesByCategory("all");
    },[]);


    const getCoursesByCategory=(category)=> {
        let url = "";

        if(category === "all") {
            url = "http://gateway.socoa.online:8000/course-service/course?order=createdAt";
        } else if (category === "dev"){
            url = "http://gateway.socoa.online:8000/course-service/course?category=%EA%B0%9C%EB%B0%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D&order=createdAt&page=0"
        } else if (category === "security"){
            url = "http://gateway.socoa.online:8000/course-service/course?category=%EB%B3%B4%EC%95%88-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC&order=createdAt&page=0"
        } else if (category === "game"){
            url = "http://gateway.socoa.online:8000/course-service/course?category=%EA%B2%8C%EC%9E%84%20%EA%B0%9C%EB%B0%9C&order=createdAt&page=0"
        } else if (category === "data"){
            url = "http://gateway.socoa.online:8000/course-service/course?category=%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A4&order=createdAt&page=0\n"
        } else {
            url = `http://gateway.socoa.online:8000/course-service/course?order=createdAt&search=${category}`
        }
        axios.get(url)

            .then(response => {
                // console.log(response.data + "?");
                console.log(response);
                console.log("들어왓졍?");

                const content = response.data.data.content;
                const objects = [];


                for (let i = 0; i < content.length; i++) {
                    const obj = {
                        courseIndex : content[i].courseIndex,
                        category : content[i].category,
                        courseName : content[i].courseName,
                        price : content[i].price,
                        difficulty : content[i].difficulty,
                        courseTitlePhotoUrl : content[i].courseTitlePhotoUrl,
                    }
                    objects.push(obj);

                }
                setData(objects);
            })
            .catch(error => {
                console.error(error);
            });
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
    const activeEnter = useCallback(
        (e) => {
        if(e.key === 'Enter'){
            setSearchStart(true);
            isClicked(false);
        }
        if(e.key ==='Escape'){
            isClicked(false);
        }
    }, [isClicked, setSearchStart]
    );

    const CourseListPageContent=()=> {
        return(
            <div className="course-content">
                <div className="course-content-whole">
                    <div className="course-side-nav-bar">
                        <div className="course-side-nav-bar-item"><a onClick={() => getCoursesByCategory("all")}>전체 강의</a></div>
                        <div className="course-side-nav-bar-item"><a onClick={() => getCoursesByCategory("dev")}>개발·프로그래밍</a></div>
                        <div className="course-side-nav-bar-item"><a onClick={() => getCoursesByCategory("security")}>보안·네트워크</a></div>
                        <div className="course-side-nav-bar-item"><a onClick={() => getCoursesByCategory("game")}>게임 개발</a></div>
                        <div className="course-side-nav-bar-item"><a onClick={() => getCoursesByCategory("data")}>데이터 사이언스</a></div>
                    </div>
                    <div className="course-content-lists">
                        <div className="course-search-result">
                            <div className="course-search-result-message">
                                {searchStart && (
                                    <>
                                        <SearchResultText result={inputs} />
                                        {getCoursesByCategory(inputs)}
                                    </>
                                )}                            </div>
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
                            <div className="course-Tile-lists">
                                {data.map((item, i) =>(
                                    <div className="course-Tile" key={i}>
                                        <Link to={`/Course/${item.courseIndex}`}>
                                            <img src={item.courseTitlePhotoUrl} className="lectureThumbnail_2" alt="lecture1"/>
                                        </Link>
                                        <div>
                                            {item.courseName}
                                        </div>

                                    </div>
                                ))}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <Body>
            <div className="course-content">
                <div className="search-course-bar">
                    <label htmlFor="search">
                        <input className="course_search_bar"
                               type="text"
                               name="search"
                               placeholder = "듣고 싶은 강의가 무엇인가요?"
                               id="search"
                               onClick={()=> {
                                   isClicked(!clicked);
                               }}
                               value={inputs}
                               onChange={(e) =>{
                                   setInputs(e.target.value)
                                   setSearchStart(false)}
                               }
                               onKeyDown={(e)=>activeEnter(e)}
                            // onKeyDown={activeEnter}

                        />
                    </label>
                    {clicked && <ClickedBox/>}
                </div>
            </div>
            <CourseListPageContent/>
        </Body>
    )
}

export default CourseListPage;