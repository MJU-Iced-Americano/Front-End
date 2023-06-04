import Body from "../components/Body/Body";
import React, {useState} from "react";
import '../Teacher/styles/CourseRegisterPage.css';
import {Link} from "react-router-dom";
import axios from "axios";

const CourseRegisterPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 나타내는 state
    const [token, setToken] = useState('');
    const [skillInput, setSkillInput] = useState("");
    const [form, setForm] = useState({
        category: "",
        courseName: "",
        price: 0,
        courseDescription: "",
        difficulty: 0,
        skillList: [],
        curriculumCreateDtos: [
            {
                chapter: 0,
                curriculumTitle: "",
                lectureSum: 0
            }
        ],
        titlePhoto: ""
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(name, value);
    //     const [fieldName, index, fieldProperty] = name.match(/\[(.*?)\]/g).map((match) => match.replace(/[\[\]']+/g, '').split('.'));
    //     setForm((prevForm) => {
    //         const curriculumCreateDtos = [...prevForm.curriculumCreateDtos];
    //         curriculumCreateDtos[index] = {
    //             ...curriculumCreateDtos[index],
    //             [fieldProperty]: value
    //         };
    //         return {
    //             ...prevForm,
    //             curriculumCreateDtos
    //         };
    //     });
    // };

    const addSkill = () => {
        setForm((prevForm) => ({
            ...prevForm,
            skillList: [...prevForm.skillList, skillInput]
        }));
        console.log(skillInput);
        console.log(form.skillList.join(", ") + "!");
        setSkillInput(""); // Reset the skill input value after adding it to the skillList

    };

    const handleCurriculumChange = (e, index) => {
        console.log("유휴~");
        const {name, value} = e.target;
        const updatedCurriculum = [...form.curriculumCreateDtos];
        updatedCurriculum[index][name] = value;

        setForm(prevForm => ({
            ...prevForm,
            curriculumCreateDtos: updatedCurriculum
        }));
    };
    const handleChapterCountChange = (e) => {
        const count = parseInt(e.target.value);
        //아마 안될 걸?
        setForm((prevForm) => {
            const curriculumCreateDtos = Array.from({length: count}, (_, index) => ({
                chapter: index + 1,
                curriculumTitle: "",
                lectureSum: 0
            }));
            return {
                ...prevForm,
                curriculumCreateDtos
            };
        });
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        // form 데이터를 formData로 변환
        const formData = new FormData();
        formData.append("category", form.category);
        formData.append("courseName", form.courseName);
        formData.append("price", form.price);
        formData.append("courseDescription", form.courseDescription);
        formData.append("difficulty", form.difficulty);
        formData.append("skillList", JSON.stringify(form.skillList));
        form.curriculumCreateDtos.forEach((curriculum, index) => {
            formData.append(`curriculumCreateDtos[${index}].chapter`, curriculum.chapter);
            formData.append(`curriculumCreateDtos[${index}].curriculumTitle`, curriculum.curriculumTitle);
            formData.append(`curriculumCreateDtos[${index}].lectureSum`, curriculum.lectureSum);
        });
        formData.append("titlePhoto", form.titlePhoto);
        const checkLoginStatus = () => {
            const ssoClientCookie = document.cookie.includes('SOCOA-SSO-TOKEN');
            const ssoToken = document.cookie.match('SOCOA-SSO-TOKEN')
            setIsLoggedIn(ssoClientCookie);
            console.log(ssoToken);
            console.log(ssoToken.input);
            setToken(ssoToken.input);
        };
        checkLoginStatus();

        // POST 요청 보내기
        await axios({
            method: 'post',
            url: "http://54.180.213.187:8080/course-service/course/manage/new-course",
            data: formData,
            headers: {
                Cookie: token
            }
        }).then(response => {
            console.log("등록 완료:", response.data)
        }).catch(error => {
            console.error(error);
        });


    }

    const CourseRegisterContent = () => {
        return (
            <form onSubmit={handleSubmit}>
                {/* Category and other input fields */}
                {/*<label>*/}
                {/*    Course Name:*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="courseName"*/}
                {/*        value={form.courseName}*/}
                {/*        onChange={handleInputChange}*/}
                {/*    />*/}
                {/*</label>*/}
                <br/>

                <br/>
                {/* Title Photo and other input fields */}
                <button type="submit">Submit</button>
            </form>
        );
    };

    return (
        <Body>
            <div className="course_form">
                <label htmlFor="category">카테고리 선택:</label>
                <select id="category" name="category" value={form.category} onChange={handleInputChange}>
                    <option value="">선택하세요</option>
                    <option value="개발-프로그래밍">개발-프로그래밍</option>
                    <option value="보안-네트워크">보안-네트워크</option>
                    <option value="게임 개발">게임 개발</option>
                    <option value="데이터 사이언스">데이터 사이언스</option>
                </select>
                <label>
                    코스 이름 :
                    <input
                        type="text"
                        name="courseName"
                        value={form.courseName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    코스 가격 :
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleInputChange}
                        className="inputNumber"
                    />
                </label>
                <label>
                    코스 설명 :
                    <textarea
                        name="courseDescription"
                        value={form.courseDescription}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="difficulty">난이도 : </label>
                <select id="difficulty" name="difficulty" value={form.difficulty} onChange={handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>
                    Skill List:
                    <input
                        type="text"
                        name="skillList"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                    />
                </label>
                <button type="button" onClick={addSkill}>Add Skill</button>
                {form.skillList.map((skill, index) => (
                    <div key={index}>
                        <label>
                            Skill {index + 1}:
                            <input
                                type="text"
                                name="skillList"
                                value={skill}
                                onChange={(e) => {
                                    const updatedSkillList = [...form.skillList];
                                    updatedSkillList[index] = e.target.value;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        skillList: updatedSkillList
                                    }));
                                }}
                            />
                        </label>
                    </div>
                ))}
                <label htmlFor="chapterCount">챕터 개수 선택:</label>
                <select id="chapterCount" name="chapterCount" value={form.curriculumCreateDtos.length}
                        onChange={handleChapterCountChange}>
                    <option value="0">선택하세요</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                {form.curriculumCreateDtos.map((curriculum, index) => (
                    <div key={index}>
                        <div>Chapter {curriculum.chapter}</div>
                        <label htmlFor={`curriculumTitle-${index}`}>챕터 제목:</label>
                        <input
                            type="text"
                            id={`curriculumTitle-${index}`}
                            name="curriculumTitle"
                            value={curriculum.curriculumTitle}
                            // onChange={handleInputChange}
                            onChange={e => handleCurriculumChange(e, index)}
                            //커리큘럼 부분 어떻게 해야할지 모르겠네......흠 ㅎ,ㅁ...
                        />
                        <br/>
                        <label htmlFor={`lectureSum-${index}`}>강좌 개수</label>
                        강의 개수 :
                        <input
                            type="number"
                            id={`lectureSum-${index}`}
                            name="lectureSum"
                            value={curriculum.lectureSum}
                            // onChange={handleInputChange}
                            onChange={e => handleCurriculumChange(e, index)}
                            className="inputNumber"
                        />
                        <br/>
                    </div>
                ))}

            </div>
            <CourseRegisterContent/>
        </Body>
    );
};

export default CourseRegisterPage;