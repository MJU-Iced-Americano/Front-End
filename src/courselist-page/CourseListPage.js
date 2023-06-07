import './styles/CourseListPage.css';
import SearchResultText from './CourseSearchResult';
import ClickedBox from './CourseClickedBox';
import React, {useCallback, useEffect, useState} from "react";
import {BsSliders} from "react-icons/bs";
import {FaAngleDown} from "react-icons/fa";
import Body from "../components/Body/Body";
import axios from "axios";
import {Link} from "react-router-dom";

const CourseListPage = () => {
    // const[inputs, setInputs] = useState("");
    const [clicked, isClicked] = useState(false);
    const [inputs, setInputs] = useState("");
    const [searchStart, setSearchStart] = useState(false);
    const [tagCatClicked, isTagCatClicked] = useState(false);
    const [filterClicked, isFilterClicked] = useState(false);
    const [order, setOrder] = useState("");
    const [skill, setSkill] = useState("");
    const [category, setCategory] = useState("");
    const [data, setData] = useState([]);
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken = "Bearer " + document.cookie.substring(name.length, document.cookie.length);

    useEffect(() => {
        getCoursesByCategory(null, null, null);

    }, []);
    //category와 skill을 동시에 정렬하기를 원한다는 말씀?
    const getCoursesByCategory = (category, skill, order) => {
        let url = "http://gateway.socoa.online:8000/course-service/course?";
        let queryParams = [];

        if (category) {
            queryParams.push(`category=${category}`);
        }

        if (skill) {
            queryParams.push(`skill=${skill}`);
        }

        if (order) {
            queryParams.push(`order=${order}`);
        }

        //검색시
        // else{
        //     url = `http://gateway.socoa.online:8000/course-service/course?order=createdAt&search=${category}`
        // }
        queryParams.push("page=0");

        url += queryParams.join("&");

        axios.get(url, {
            headers: {
                "Authorization": ssoToken
            }
        })
            .then(response => {
                // console.log(response.data + "?");
                console.log(response);

                const content = response.data.data.content;
                const objects = [];

                for (let i = 0; i < content.length; i++) {
                    const obj = {
                        courseIndex: content[i].courseIndex,
                        category: content[i].category,
                        courseName: content[i].courseName,
                        price: content[i].price,
                        difficulty: content[i].difficulty,
                        courseTitlePhotoUrl: content[i].courseTitlePhotoUrl,
                    }
                    objects.push(obj);

                }
                setData(objects);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const getCoursesBySearch = useCallback((keyword) => {
        axios.get(`http://gateway.socoa.online:8000/course-service/course?search=${keyword}`, {
            headers: {
                "Authorization": ssoToken
            }
        }).then(response => {
            const s_data = response.data.data;
            console.log(s_data + "들어와라");
            const content = response.data.data.content;
            const objects = [];

            for (let i = 0; i < content.length; i++) {
                const obj = {
                    courseIndex: content[i].courseIndex,
                    category: content[i].category,
                    courseName: content[i].courseName,
                    price: content[i].price,
                    difficulty: content[i].difficulty,
                    courseTitlePhotoUrl: content[i].courseTitlePhotoUrl,
                }
                objects.push(obj);

            }
            setData(objects);
        })
            .catch(error => {
                console.error(error);
            });
    })

//Skill들 다 보여주게는 아직..!
const getSkills = () => {
    axios.get('http://gateway.socoa.online:8000/course-service/course/skill/all', {
        headers: {
            "Authorization": ssoToken
        }
    }).then(response => {
            const s_data = response.data.data;
            console.log(s_data + "들어와라");
        }
    )
}

const TagBox = ({keyword}) => {
    return (
        <a onClick={() => getCoursesByCategory(null, keyword, null)}>
            <div className="search-tag-box">
                #{keyword}
            </div>
        </a>
    );
}
    const handleInputChange = useCallback((e) => {
        setInputs(e.target.value);
        setSearchStart(false);
    }, []);

const activeEnter = useCallback(
    (e) => {
        if (e.key === 'Enter') {
            setSearchStart(true);
            isClicked(false);
        }
        if (e.key === 'Escape') {
            isClicked(false);
        }
    }, [isClicked, setSearchStart]
);

// const CourseListPageContent = () => {
//     return (
//         <div className="course-content">
//
//         </div>
//     );
// }

return (
    <Body>
        <div className="course-content">
            <div className="search-course-bar">
                <label htmlFor="search">
                    <input className="course_search_bar"
                           type="text"
                           name="search"
                           placeholder="듣고 싶은 강의가 무엇인가요?"
                           id="search"
                           onClick={() => {
                               isClicked(!clicked);
                           }}
                           value={inputs}
                           onChange={handleInputChange}
                           onKeyDown={(e) => activeEnter(e)}
                        // onKeyDown={activeEnter}

                    />
                </label>
                {clicked && <ClickedBox/>}
            </div>
            <div className="course-content-whole">
                <div className="course-side-nav-bar">
                    <div className="course-side-nav-bar-item"><a
                        onClick={(e) => getCoursesByCategory(null, null, null)}>전체 강의</a></div>
                    <div className="course-side-nav-bar-item"><a
                        onClick={(e) => getCoursesByCategory(e.target.innerText)}>개발-프로그래밍</a></div>
                    <div className="course-side-nav-bar-item"><a
                        onClick={(e) => getCoursesByCategory(e.target.innerText)}>보안-네트워크</a></div>
                    <div className="course-side-nav-bar-item"><a
                        onClick={(e) => getCoursesByCategory(e.target.innerText)}>게임 개발</a></div>
                    <div className="course-side-nav-bar-item"><a
                        onClick={(e) => getCoursesByCategory(e.target.innerText)}>데이터 사이언스</a></div>
                </div>
                <div className="course-content-lists">
                    <div className="course-search-result">
                        <div className="course-search-result-message">
                            {searchStart && (
                                <>
                                    <SearchResultText result={inputs}/>
                                    {getCoursesBySearch(inputs)}
                                </>
                            )}                            </div>
                        <div className="course-search-main-tag">
                            <div className="course-search-result-tag">
                                <BsSliders id="iconTag" onClick={() => {
                                    isTagCatClicked(!tagCatClicked);
                                }}/>
                                <TagBox keyword="java"/>
                                <TagBox keyword="k8s"/>
                                <TagBox keyword="chatGPT"/>
                                <TagBox keyword="spring"/>
                                <div className="search-dropdown-filter">
                                    <label className="dropdown-label" onClick={() => {
                                        isFilterClicked(!filterClicked)
                                    }}>
                                        <div>필터</div>
                                        <FaAngleDown className="dropdown-icon"/>
                                    </label>
                                    {filterClicked &&
                                        <div className="dropdown-content">
                                            <ul>
                                                <li onClick={(e) => getCoursesByCategory(null, null, "createdAt")}>최신
                                                    순
                                                </li>
                                                <li onClick={(e) => getCoursesByCategory(null, null, "difficulty")}>난이도
                                                    순
                                                </li>
                                                <li onClick={(e) => getCoursesByCategory(null, null, "hits")}>조회수 높은 순
                                                </li>
                                                <li onClick={(e) => getCoursesByCategory(null, null, "likeSum")}>인기 순
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                            {tagCatClicked &&
                                <div className="course-search-result-tag-under">
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
                            {data.map((item, i) => (
                                <div className="course-Tile" key={i}>
                                    <Link to={`/Course/${item.courseIndex}`}>
                                        <img src={item.courseTitlePhotoUrl} className="lectureThumbnail_2"
                                             alt="lecture1"/>
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
    </Body>
)
}

export default CourseListPage;