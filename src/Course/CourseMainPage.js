import React, {memo, useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './CourseMainPage.css';
import Accordion from "react-bootstrap/Accordion";
import defaultimage from '../assets/temp/image 14.png';
import {BsPlayCircle} from "react-icons/bs";
import {AiFillAlert} from "react-icons/ai";
import {FaAngleDown, FaRegThumbsUp} from "react-icons/fa";
import {RiHeart2Line, RiHeart2Fill} from "react-icons/ri";
import {GrCart} from "react-icons/gr";
import cocoa_1 from '../assets/icon_group/cocoa_1.png'
import cocoa_2 from '../assets/icon_group/cocoa_2.png'
import cocoa_3 from '../assets/icon_group/cocoa_3.png'
import cocoa_4 from '../assets/icon_group/cocoa_4.png'
import cocoa_5 from '../assets/icon_group/cocoa_5.png'
import full_cocoa from "../assets/icons/socoa-icon 1.png";
import dummy_cocoa from "../assets/icons/socoa-icon-dummy.png";
import Body from "../components/Body/Body";
import axios from "axios";
import ComplaintModal from './components/ComplaintModal';
import {getCookie} from '../components/Cookie';


const CourseMainPage = (props) => {
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);
    const [likes, setLikes] = useState();
    const [clikes, setCLikes] = useState();
    const [liked, setLiked] = useState(false);
    const [cliked, setCLiked] = useState(false);
    const [newReview, setNewReview] = useState({user_photo: "", review_content: "", grade: 0, user_name: "김이박"});
    const [filterClicked, isFilterClicked] = useState(false);
    const cocoaArray = [0, 1, 2, 3, 4];
    const [rate, setRate] = useState([false, false, false, false, false]);
    const [cHovered, setCHovered] = useState(null);
    const [cClicked, setCClicked] = useState(null);
    const [cModal, setCModal] = useState(false);
    const {courseIndex} = useParams();
    const [complaintId, setComplaintId] = useState(-1);
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(name.length, document.cookie.length);


    useEffect(() => {
        getDetails(courseIndex);
        getReviews("date", courseIndex);
        console.log(detail);
    }, []);

    const getReviews = (order, courseIndex) => {
        let url = "";
        if (order === "date") {
            url = `http://gateway.socoa.online:8000/review-service/review/get/${courseIndex}`;
        } else if (order === "like") {
            url = `http://gateway.socoa.online:8000/review-service/review/${courseIndex}/getLiked`;
        } else if (order === "dGrade") {
            url = `http://gateway.socoa.online:8000/review-service/review/${courseIndex}/getDgrade`;
        } else if (order === "aGrade") {
            url = `http://gateway.socoa.online:8000/review-service/review/${courseIndex}/getAgrade`;
        }
        //관리자
        axios.get(url, {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0SFdqMnVlM283X2FOVDUzSE5yUjVnTW9NZUJwUjZLeGRwdWtPRk5DZXYwIn0.eyJleHAiOjE2ODU5NDEzNjUsImlhdCI6MTY4NTk0MTMwNSwiYXV0aF90aW1lIjoxNjg1OTQxMzA1LCJqdGkiOiI1MjhlOTk3ZS0wODhlLTRjMDEtOTY3ZS0wNjJkOTU0ODkyNDkiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6MzU2ODNkYjUtOGE4ZC00M2M0LThkNmYtN2I5ZWE1YTZiNWM1OjFkMjk2YWU4LWJmZWItNDljMS05NjU2LWI2YTc5NDY2ZmZiNiIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImF0X2hhc2giOiJENWZ5ZnNoQkFPV0x1dkxwakdDeHBRIiwiYWNyIjoiMSIsInNpZCI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiRkVNQUxFIiwibmlja25hbWUiOiJHTeuztOuTnCIsInByZWZlcnJlZF91c2VybmFtZSI6ImR1ZWtkbXMiLCJlbWFpbCI6Im1hbmFnZXJAbmF2ZXIuY29tIn0.iJSPIWXV0MTWfWg5R20STIfCrQAzc4AXMLbRpSr3zcISnlEuMEj7XjRugPSlzXo1MXdFP-a5CHMnJCJCyembGLTKFSqVpMwO4qDFM-eVDFWpFmq7pieW_VqQBIw7vOpz9zPd6XkwHkqSHWo7PDn5fGJzR97y-L_4M-oTqR6iysStE67YjLEuw9m7aIRftawebTwyoMZBOHz4miuokZaR0YKsBdzrZDUgBTZNZyWDz-8aAJRXpWTKTUW9o8lx-2ZEOFQ6WpkYum27pNKQmsq-dDM6g7tvEi9_M9PBa6DaM872vj1iYVFWs6tq_6lgS5riGgwiBlMuad4oX9crGK07-w"


            }
        })

            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data);
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj = {
                        reviewIndex: data.list[i].reviewIndex,
                        grade: data.list[i].grade,
                        user_photo: data.list[i].user_photo,
                        user_name: data.list[i].user_name,
                        date: data.list[i].date,
                        review_content: data.list[i].review_content,
                        likes: data.list[i].likes,
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
    const getDetails = (courseIndex) => {

        const name = 'SOCOA-SSO-TOKEN=';
        const ssoToken = "Bearer "+ document.cookie.substring(name.length, document.cookie.length);
        console.log(ssoToken);

        axios.get(`http://gateway.socoa.online:8000/course-service/course/${courseIndex}`, {
            headers: {
                "Authorization": ssoToken
            }
        })
            .then(response => {
                const data = response.data.data;
                console.log(JSON.stringify(data, null, 2));
                console.log(data.lecturerInfoDto.lecturerName);
                setDetail(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    const TagBox = ({keyword}) => {
        return (
            <a>
                <div className="search_tag_box">
                    #{keyword}
                </div>
            </a>
        );
    }
    const handleLike = (index) => {
        axios.get(`http://gateway.socoa.online:8000/review-service/review/inlike/${index}`, {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0SFdqMnVlM283X2FOVDUzSE5yUjVnTW9NZUJwUjZLeGRwdWtPRk5DZXYwIn0.eyJleHAiOjE2ODU5NDEzNjUsImlhdCI6MTY4NTk0MTMwNSwiYXV0aF90aW1lIjoxNjg1OTQxMzA1LCJqdGkiOiI1MjhlOTk3ZS0wODhlLTRjMDEtOTY3ZS0wNjJkOTU0ODkyNDkiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6MzU2ODNkYjUtOGE4ZC00M2M0LThkNmYtN2I5ZWE1YTZiNWM1OjFkMjk2YWU4LWJmZWItNDljMS05NjU2LWI2YTc5NDY2ZmZiNiIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImF0X2hhc2giOiJENWZ5ZnNoQkFPV0x1dkxwakdDeHBRIiwiYWNyIjoiMSIsInNpZCI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiRkVNQUxFIiwibmlja25hbWUiOiJHTeuztOuTnCIsInByZWZlcnJlZF91c2VybmFtZSI6ImR1ZWtkbXMiLCJlbWFpbCI6Im1hbmFnZXJAbmF2ZXIuY29tIn0.iJSPIWXV0MTWfWg5R20STIfCrQAzc4AXMLbRpSr3zcISnlEuMEj7XjRugPSlzXo1MXdFP-a5CHMnJCJCyembGLTKFSqVpMwO4qDFM-eVDFWpFmq7pieW_VqQBIw7vOpz9zPd6XkwHkqSHWo7PDn5fGJzR97y-L_4M-oTqR6iysStE67YjLEuw9m7aIRftawebTwyoMZBOHz4miuokZaR0YKsBdzrZDUgBTZNZyWDz-8aAJRXpWTKTUW9o8lx-2ZEOFQ6WpkYum27pNKQmsq-dDM6g7tvEi9_M9PBa6DaM872vj1iYVFWs6tq_6lgS5riGgwiBlMuad4oX9crGK07-w"

            }
        } )
            .then(response => {
                console.log(response.data);
                setLikes(likes + 1);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleLikeCourse = (index) => {

        axios.get(`http://gateway.socoa.online:8000/course-service/course/${index}/like`, {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0SFdqMnVlM283X2FOVDUzSE5yUjVnTW9NZUJwUjZLeGRwdWtPRk5DZXYwIn0.eyJleHAiOjE2ODU5NDEzNjUsImlhdCI6MTY4NTk0MTMwNSwiYXV0aF90aW1lIjoxNjg1OTQxMzA1LCJqdGkiOiI1MjhlOTk3ZS0wODhlLTRjMDEtOTY3ZS0wNjJkOTU0ODkyNDkiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6MzU2ODNkYjUtOGE4ZC00M2M0LThkNmYtN2I5ZWE1YTZiNWM1OjFkMjk2YWU4LWJmZWItNDljMS05NjU2LWI2YTc5NDY2ZmZiNiIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImF0X2hhc2giOiJENWZ5ZnNoQkFPV0x1dkxwakdDeHBRIiwiYWNyIjoiMSIsInNpZCI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiRkVNQUxFIiwibmlja25hbWUiOiJHTeuztOuTnCIsInByZWZlcnJlZF91c2VybmFtZSI6ImR1ZWtkbXMiLCJlbWFpbCI6Im1hbmFnZXJAbmF2ZXIuY29tIn0.iJSPIWXV0MTWfWg5R20STIfCrQAzc4AXMLbRpSr3zcISnlEuMEj7XjRugPSlzXo1MXdFP-a5CHMnJCJCyembGLTKFSqVpMwO4qDFM-eVDFWpFmq7pieW_VqQBIw7vOpz9zPd6XkwHkqSHWo7PDn5fGJzR97y-L_4M-oTqR6iysStE67YjLEuw9m7aIRftawebTwyoMZBOHz4miuokZaR0YKsBdzrZDUgBTZNZyWDz-8aAJRXpWTKTUW9o8lx-2ZEOFQ6WpkYum27pNKQmsq-dDM6g7tvEi9_M9PBa6DaM872vj1iYVFWs6tq_6lgS5riGgwiBlMuad4oX9crGK07-w"


            }
        })
            .then(response => {
                console.log(response.data);
                console.log(detail.courseLikeSum)
                console.log(index + "이거야. ");
                setDetail({ ...detail, courseLikeSum: detail.courseLikeSum + 1 });

            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleLikeClicked = () => {
        setLiked(!liked);
    };
    const handleCLikeClicked = () => {
        setCLiked(!cliked);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleInputChange = (event) => {
        console.log("실행이 되니???");
        const {name, value} = event.target;
        //name이랑 value가 이용되지 않고잇음!이
        setNewReview(prevState => ({...prevState, [name]: value}));
    };
    const handleAddReview = (event) => {
        event.preventDefault();
        const reviewData = {...newReview};
        axios.post("http://gateway.socoa.online:8000/review-service/review/register", reviewData, {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0SFdqMnVlM283X2FOVDUzSE5yUjVnTW9NZUJwUjZLeGRwdWtPRk5DZXYwIn0.eyJleHAiOjE2ODU5NDEzNjUsImlhdCI6MTY4NTk0MTMwNSwiYXV0aF90aW1lIjoxNjg1OTQxMzA1LCJqdGkiOiI1MjhlOTk3ZS0wODhlLTRjMDEtOTY3ZS0wNjJkOTU0ODkyNDkiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6MzU2ODNkYjUtOGE4ZC00M2M0LThkNmYtN2I5ZWE1YTZiNWM1OjFkMjk2YWU4LWJmZWItNDljMS05NjU2LWI2YTc5NDY2ZmZiNiIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImF0X2hhc2giOiJENWZ5ZnNoQkFPV0x1dkxwakdDeHBRIiwiYWNyIjoiMSIsInNpZCI6ImFmZDc4MzI5LWRlOWYtNDM0Zi05NjFlLTllZjA5NzYzN2EyZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiRkVNQUxFIiwibmlja25hbWUiOiJHTeuztOuTnCIsInByZWZlcnJlZF91c2VybmFtZSI6ImR1ZWtkbXMiLCJlbWFpbCI6Im1hbmFnZXJAbmF2ZXIuY29tIn0.iJSPIWXV0MTWfWg5R20STIfCrQAzc4AXMLbRpSr3zcISnlEuMEj7XjRugPSlzXo1MXdFP-a5CHMnJCJCyembGLTKFSqVpMwO4qDFM-eVDFWpFmq7pieW_VqQBIw7vOpz9zPd6XkwHkqSHWo7PDn5fGJzR97y-L_4M-oTqR6iysStE67YjLEuw9m7aIRftawebTwyoMZBOHz4miuokZaR0YKsBdzrZDUgBTZNZyWDz-8aAJRXpWTKTUW9o8lx-2ZEOFQ6WpkYum27pNKQmsq-dDM6g7tvEi9_M9PBa6DaM872vj1iYVFWs6tq_6lgS5riGgwiBlMuad4oX9crGK07-w"

            }
        })
            .then(response => {
                console.log(response);
                setNewReview({review_content: "", grade: 0, user_name: "default", user_photo: ""});
                setData((prevData) => [...prevData, reviewData]);
                console.log(data + "는????");

            })
            .catch((error) => {
                console.error(error);
            });

    };

    const getImagePath = (difficulty) => {
        switch (difficulty) {
            case 1:
                return cocoa_1;
            case 2:
                return cocoa_2;
            case 3:
                return cocoa_3;
            case 4:
                return cocoa_4;
            case 5:
                return cocoa_5;
            default:
                return null;
        }
    };


    const handleComlaint = (index) => {
        setComplaintId(index);
    }

    const CourseMainPageContent = () => {
        return (

            <div className="whole">
                <div className="overview_top">
                    <div className="overview_1">
                        <div className="course_category">{detail.category}</div>
                        <div className="course_name">{detail.courseName}</div>
                    </div>
                    <div className="overview_2">
                        <div className="course_like" onClick={() => {
                            handleLikeCourse(detail.courseIndex)
                            handleCLikeClicked()}}>

                            {cliked ? <RiHeart2Fill size={45}/> : <RiHeart2Line size={45}/>}
                        </div>
                        <div>{detail.courseLikeSum}</div>
                    </div>
                </div>
                <hr/>
                <div className="overview_bottom">
                    <div className="overview_left">
                        <div className="video_temp">
                            <img src={detail.courseTitlePhotoUrl} className="lectureThumbnail" alt="lecture"/>
                        </div>
                        <div className="regi_button">
                            <div className="course_regi">수강하러 가기</div>
                            <div className="course_cart"><GrCart size={28}/></div>
                            {/*cart 색깔 변경부터 다시 시작 */}
                        </div>
                    </div>
                    <div className="overview_right">
                        <div className="tag_wrapper">
                            <div className="tags">
                                {detail.skillList && detail.skillList.map((skill, i) => (
                                    <TagBox key={i} keyword={skill}/>
                                ))}
                            </div>
                        </div>
                        <div className="overview_detail">
                            {/* 나중에 div로 쪼갤것*/}
                            <div className="details">강사 : {detail && detail.lecturerInfoDto && detail.lecturerInfoDto.lecturerName} 님 <br/></div>
                            <div className="details">누적 강의 조회수 : {detail.hits}회<br/></div>
                            <div className="details">총 강의시간 : {detail.courseTime}<br/></div>
                            <div className="details">가격 : {detail.price} <br/></div>
                            <div className="details">난이도 :
                                <img src={getImagePath(detail.difficulty)} alt={`Cocoa 사${detail.difficulty}`}
                                     className="cocoas"/>사
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
{/*/////////////////////////////////////////////////*/}
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
                    <div className="description_detail">
                        {detail.courseDescription}
                    </div>
                </div>
                <div className="curriculum_wrapper" id="section2">
                    <div className="for_anchor"></div>
                    <div className="section_title">커리큘럼</div>
                    <Accordion className="accWhole" defaultActiveKey="0" flush>
                        {detail.curriculumReadDtoList && detail.curriculumReadDtoList.map((cur, i) => (

                            <Accordion.Item className="item" eventKey={i}>
                                <Accordion.Header
                                    className="chapter">Chapter {i + 1}. {cur.curriculumTitle}</Accordion.Header>
                                {cur.lectureReadDtos && cur.lectureReadDtos.map((lec, i) => (
                                    <Accordion.Body className="chapter_detail" key={i}>
                                        <div><BsPlayCircle/></div>
                                        <div className="lecture_title"><a className="Canvasa"
                                                                          href={`/LecturePage/${courseIndex}/${lec.lectureIndex}`}>{lec.lectureTitle}</a>
                                        </div>
                                        <div className="time">{lec.lectureTime}</div>
                                    </Accordion.Body>
                                ))}

                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>


            </div>


        );
    }
    ///////////////////////////////////
// return 부분 수정 예정
    return (
        <Body>
            <CourseMainPageContent/>
            <div className="whole">
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
                                    <img className="icon_main2" alt="icon2" src={cocoa_4}/>
                                </div>
                                <div className="cocoa_length">
                                </div>
                            </div>
                            <div className="total_cocoa">
                                <div className="cocoa_review_num">
                                    <img className="icon_main2" alt="icon2" src={cocoa_3}/>
                                </div>
                                <div className="cocoa_length">
                                </div>
                            </div>
                            <div className="total_cocoa">
                                <div className="cocoa_review_num">
                                    <img className="icon_main2" alt="icon2" src={cocoa_2}/>
                                </div>
                                <div className="cocoa_length">
                                </div>
                            </div>
                            <div className="total_cocoa">
                                <div className="cocoa_review_num">

                                    {/*cocoa1 크기 다시 맞춰서 export 하기 !*/}

                                    <img className="icon_main2" alt="icon2" src={cocoa_1}/>
                                </div>
                                <div className="cocoa_length">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*dksdkjsnkfjskj*/}
                    <div className="review_list">

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

                            <div className="review_listITem" key={item.reviewIndex}>
                                {/* 아. date어떻게 해야할지 모르겟음. 내가 다시 해봐야됨.  */}
                                <div className="sections">
                                    <div className="section1"><img src={defaultimage} alt="defaultimage"
                                                                   className="profile"/></div>
                                    <div className="section2">
                                        <div className="cocoa_num2">{item.grade}</div>
                                        <div className="user_name">{item.user_name}</div>
                                    </div>
                                    <div className="review_detail">{item.review_content}
                                    </div>
                                    <div className="additionalFunc">

                                        <div className="date">{item.date}</div>
                                        <div>
                                            <AiFillAlert onClick={() => handleComlaint(item.reviewIndex)}/>
                                            {/*{cModal === true ? <ComplaintModal index={item.reviewIndex} closeModal={() => setCModal(false)}/> : null}*/}
                                        </div>
                                        <div>
                                            <button onClick={() =>{
                                                handleLike(item.reviewIndex)
                                                handleLikeClicked()
                                            }}>
                                                <FaRegThumbsUp/>{item.likes}
                                            </button>
                                        </div>
                                    </div>
                                    {complaintId === item.reviewIndex && (
                                        <ComplaintModal index={complaintId} onClose={() => setComplaintId(null)}/>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div>
                            <form className="input_wrapper">

                                <div className="rating">
                                    {cocoaArray.map(element => (
                                        //element 만큼 클릭하거나 element만큼 호버하면 이미지 변경
                                        <img src={cHovered >= element || cClicked >= element ? full_cocoa : dummy_cocoa}
                                             className="rating_cooca"
                                             key={element}
                                             id={element}
                                             onMouseEnter={() => setCHovered(element)}
                                             onMouseLeave={() => setCHovered(null)}
                                             onClick={() => {
                                                 setCClicked(element);
                                                 handleInputChange({
                                                     target: {
                                                         name: "grade",
                                                         value: element + 1
                                                     }
                                                 });
                                             }
                                             }
                                             name="grade"
                                             value={newReview.grade}

                                        ></img>
                                    ))}
                                </div>

                                <input className="input_css" type="text" name="review_content"
                                       value={newReview.review_content}
                                       onChange={handleInputChange} placeholder="후기를 입력하세요. "></input>
                                <div className="create-button" onClick={handleAddReview}> 추가</div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </Body>
    )
}
export default CourseMainPage;