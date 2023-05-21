import React, {memo, useCallback, useEffect, useState} from "react";
import './CourseMainPage.css';
import Accordion from "react-bootstrap/Accordion";
import defaultimage from '../assets/temp/image 14.png';
import { BsPlayCircle } from "react-icons/bs";
import { AiFillAlert } from "react-icons/ai";
import {FaAngleDown, FaRegThumbsUp} from "react-icons/fa";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import cocoa_1 from '../assets/icon_group/cocoa_1.png'
import cocoa_2 from '../assets/icon_group/cocoa_2.png'
import cocoa_3 from '../assets/icon_group/cocoa_3.png'
import cocoa_4 from '../assets/icon_group/cocoa_4.png'
import cocoa_5 from '../assets/icon_group/cocoa_5.png'
import full_cocoa from "../assets/icons/socoa-icon 1.png";
import dummy_cocoa from "../assets/icons/socoa-icon-dummy.png";
import Body from "../components/Body/Body";
import axios from "axios";



const CourseMainPage=()=> {

    // let [like, setLike] = useState(0);
    const [data, setData] = useState([]);
    const [likes, setLikes] = useState();
    const [liked, setLiked] = useState(false);
    const [newReview, setNewReview] = useState({user_photo : "", review_content : "", grade : 0, user_name : "김이박"});
    const [filterClicked, isFilterClicked] = useState(false);
    const cocoaArray = [0, 1, 2, 3, 4];
    const [rate, setRate] = useState([false, false, false, false, false]);
    const [cHovered, setCHovered] = useState(null);
    const [cClicked, setCClicked] = useState(null);
    const [cModal, setCModal] = useState(false);


    useEffect(() => {

        getReviews("date");
    }, []);

    const getReviews = (order) => {
        let url = "";
        if (order === "date") {
            url = "http://localhost:8080/review-service/review/getDate";
        } else if (order === "like") {
            url = "http://localhost:8080/review-service/review/getLiked";
        } else if (order === "dGrade") {
            url = "http://localhost:8080/review-service/review/getDgrade";
        } else if (order === "aGrade") {
            url = "http://localhost:8080/review-service/review/getAgrade";
        }
        axios.get(url)

            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data);
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj = {
                        id: data.list[i].id,
                        grade: data.list[i].grade,
                        user_photo: data.list[i].user_photo,
                        user_name: data.list[i].user_name,
                        date: data.list[i].date,
                        review_content: data.list[i].review_content,
                        good_count: data.list[i].good_count
                    };
                    console.log(obj);
                    objects.push(obj);
                }
                setData(objects);
                // 배열에 저장된 객체를 출력
                console.log(objects);
            })
            .catch(error => {
                console.error(error);
            });

    }

    const TagBox=({keyword})=> {
        return (
            <a >
                <div className="search_tag_box">
                    #{keyword}
                </div>
            </a>
        );
    }

    const ComplaintModal= () => {
        return(
            <div className='modal'>
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        )
    }

    const handleLike = (index) => {
        axios.get(`http://localhost:8080/review-service/review/inlike/${index}`)
            .then(response => {
                console.log(response.data);
                console.log(index + "이거야. ");
                // console.log("눌렷어 !");
                setLikes(likes+1);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleLikeClicked = () => {
        setLiked(!liked);
    };

    const formatDate = (dateString)=> {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleInputChange = (event) => {
        console.log("실행이 되니???");
        const { name, value } = event.target;
        setNewReview(prevState => ({...prevState, [name]: value}));
    };
    const handleAddReview = (event) => {
        event.preventDefault();
        const reviewData = { ...newReview };
        axios.post("http://localhost:8080/review-service/review/register",reviewData)
            .then(response => {
                console.log(response);
                setNewReview({review_content : "", grade :0, user_name : "default", user_photo: ""});
                setData([...data, reviewData]);
                console.log(data + "는????");

            })
      .catch((error) => {
          console.error(error);
      });

    };

    const rating_cocoa = index => {
        let cocoa = [...rate];
        for(let i = 0; i<5; i++) {
            cocoa[i] = i <= index ? true : false;
        }
        setRate(cocoa);
    }

    const ReviewInputForm = () => {
        return(
            <form className="input_wrapper">
                <div className="rating">
                    {cocoaArray.map(element => (
                        //element 만큼 클릭하거나 element만큼 호버하면 이미지 변경
                        <img src={ cHovered >= element || cClicked >= element ? full_cocoa : dummy_cocoa}
                             className="rating_cooca"
                             key={element}
                             id={element}
                             onMouseEnter={() => setCHovered(element)}
                             onMouseLeave={() => setCHovered(null)}
                             onClick={() => {setCClicked(element); handleInputChange({
                                 target: {
                                 name: "grade",
                                 value: element+1
                             }
                             });}
                            }
                             name = "grade"
                             value = {newReview.grade}

                        ></img>
                    ))}
                </div>

                <input className="input_css" type="text" name="review_content" value={newReview.review_content} onChange={handleInputChange} placeholder="후기를 입력하세요. "></input>
                <div className="create-button" onClick={handleAddReview}> 추가</div>
            </form>
        )
    };


    const handleComplaint = (index) => {
        axios.post(`http://localhost:8080/review-service/review/complaint/${index}`)
            .then(response => {
                console.log(index + "이거야. ");
                // console.log("눌렷어 !");

            })
            .catch(error => {
                console.error(error);
            });
    }

    const CourseMainPageContent = () => {
        return (
                <div className="whole">
                    <div className="overview_top">
                        <div className="overview_1">
                            <div className="course_category">개발/프로그래밍 > 백엔드</div>
                            <div className="course_name">스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근기술</div>
                        </div>
                        <div className="overview_2">
                            <div className="course_like" onClick={handleLikeClicked}>
                                {liked ? <RiHeart2Fill size={45} /> : <RiHeart2Line size={45} />}
                            </div>
                            <div>6363</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="overview_bottom">
                        <div className="overview_left">
                            <div className="video_temp"></div>
                            <div className="regi_button">
                                <div className="course_regi">수강하러 가기</div>
                                <div className="course_cart"><GrCart size={28} /></div>
                                {/*cart 색깔 변경부터 다시 시작 */}
                            </div>
                        </div>
                        <div className="overview_right">
                            <div className="tags">
                                <TagBox keyword="java"/>
                                <TagBox keyword="k8s"/>
                                <TagBox keyword="chatGPT"/>
                                <TagBox keyword="spring"/>
                            </div>
                            <div className="overview_detail">
                                {/* 나중에 div로 쪼갤것*/}
                                <div className="details">강사 : 에드워드킴<br/></div>
                                <div className="details">누적 강의 조회수 : 18만회<br/></div>
                                <div className="details">총 강의시간 : 5시간 21분<br/></div>
                                <div className="d드etails">가격 : 380000원 <br/></div>
                                <div className="details">난이도 : <img src={cocoa_4} alt="cocoa_4" className="cocoas"></img> </div>

                            </div>
                        </div>
                    </div>
                    <hr/>

                    {/*anchor는 헤더랑 푸터 다시 받고 해보깅 ~!*/}
                    <div className="anchors">
                        <a className="anchor" href="#section1">강의설명</a>
                        <hr className="ver_line"/>

                        <a className="anchor" href="#section2">커리큘럼</a>
                        <hr className="ver_line"/>

                        <a className="anchor" href="#section3">수강평</a>
                    </div>
                    <hr/>
                    <div className="description_wrapper" id="section1">
                        <div className="for_anchor"></div>

                        <div className="section_title">강의설명</div>
                        <div className="description_detail"> 넓고 얕게 외워서 컴퓨터 공학 전공자가 되고 싶은 모든 비전공 초보자를 위한 강의입니다.
                            컴퓨터 구조, 운영체제 등 컴퓨터 공학 전공 필수과목에서 어떤 것을 배울 수 있는지 빠른 시간에
                            알 수 있습니다. 무엇보다 외워서라도 끝낼 수 있습니다!
                        </div>
                    </div>
                    <div className="curriculum_wrapper" id="section2">
                        <div className="for_anchor"></div>
                        <div className="section_title">커리큘럼</div>
                        <Accordion className="accWhole" defaultActiveKey="0" flush>
                            <Accordion.Item className="item">
                                <Accordion.Header className="chapter"> Chapter 1. 스프링이란 </Accordion.Header>
                                <Accordion.Body className="chapter_detail">
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 무엇인가요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                                <Accordion.Body>
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 이런걸까요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="item" eventKey="1">
                                <Accordion.Header className="chapter"> Chapter 2. 스프링이란 </Accordion.Header>
                                <Accordion.Body className="chapter_detail">
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 무엇인가요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                                <Accordion.Body>
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 이런걸까요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="item" eventKey="2">
                                <Accordion.Header className="chapter"> Chapter 3. 스프링이란 </Accordion.Header>
                                <Accordion.Body className="chapter_detail">
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 무엇인가요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                                <Accordion.Body>
                                    <div><BsPlayCircle/></div>
                                    <div className = "lecture_title">스프링이란 이런걸까요?</div>
                                    <div className="time">28:06</div>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                    <div className="review_wrapper" id="section3">
                        <div className="for_anchor"></div>
                        <div className="section_title">수강평</div>
                        <div className="box_wrapper">
                            <div className="mainbox1">
                                <h2>4.6</h2>
                                <div className="cocoa_whole">
                                    {/*실제로 리뷰 값 받을 때에는 5개, 4개, 4개 반 등으로 만들어놓은 아이콘 묶음을 선택적으로 적용하게끔. */}
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                    <img className="icon_main1" src={full_cocoa}/>
                                </div>
                                <div className="sub">(24개의 수강평)</div>
                            </div>
                            <div className="mainbox2">
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={cocoa_5}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={cocoa_4}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={cocoa_3}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">
                                        <img className="icon_main2" src={cocoa_2}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                                <div className="total_cocoa">
                                    <div className="cocoa_review_num">

                                        {/*cocoa1 크기 다시 맞춰서 export 하기 !*/}

                                        <img className="icon_main2" src={cocoa_1}/>
                                    </div>
                                    <div className="cocoa_length">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review_list">

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
                                            <li onClick={() => getReviews('date')}>최신순</li>
                                            <li onClick={() => getReviews('like')}>좋아요순</li>
                                            <li onClick={() => getReviews('dGrade')}>높은 별점순</li>
                                            <li onClick={() => getReviews('aGrade')}>낮은 별점순</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {/*default가  최신순이야.  =>  필터값 적용해준 걸 data로 다시 선언해주기 ?*/}
                            {data.map((item, i) => (

                                <div className="review_listITem" key={item.id}>
                                    {/* 아. date어떻게 해야할지 모르겟음. 내가 다시 해봐야됨.  */}
                                    <div className="sections">
                                        <div className="section1"><img src={defaultimage} alt="defaultimage" className="profile"/></div>
                                        <div className="section2">
                                            <div className="cocoa_num2">{item.grade}</div>
                                            <div className="user_name">{item.user_name}</div>
                                        </div>
                                        <div className="review_detail">{item.review_content}
                                        </div>
                                        <div className="additionalFunc">

                                            <div className="date">{item.date}</div>
                                            <div onClick={() => {handleComplaint(item.id); setCModal(true)}}><AiFillAlert /></div>
                                            {cModal === true ? <ComplaintModal /> : null}
                                            {/*complaint아직 백엔드 로직 분리중*/}
                                            <div>
                                                <button onClick={() => handleLike(item.id) }>
                                                    <FaRegThumbsUp />{item.good_count}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <ReviewInputForm/>

                        </div>
                    </div>

                </div>

        );
    }
    return (
        <Body>
            <CourseMainPageContent/>
        </Body>
    )
}
export default CourseMainPage;