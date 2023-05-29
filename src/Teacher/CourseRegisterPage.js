
import Body from "../components/Body/Body";
import React, {useCallback, useEffect, useState} from "react";
import '../Teacher/styles/CourseRegisterPage.css';
import {Link} from "react-router-dom";
import {RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
import {GrCart} from "react-icons/gr";
import axios from "axios";

const CourseRegisterPage = () => {
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
        const { name, value } = e.target;
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
        console.log(form.skillList + "!");
        setSkillInput(""); // Reset the skill input value after adding it to the skillList

    };

    const handleCurriculumChange = (index, e) => {
        const { name, value } = e.target;
        console.log("핫");
        setForm((prevForm) => {
            const curriculumCreateDtos = [...prevForm.curriculumCreateDtos];
            curriculumCreateDtos[index] = {
                ...curriculumCreateDtos[index],
                [name]: value
            };
            return {
                ...prevForm,
                curriculumCreateDtos
            };
        });
    };
    const handleChapterCountChange = (e) => {
        const count = parseInt(e.target.value);
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

    const addCurriculum = () => {
        setForm((prevForm) => {
            const curriculumCreateDtos = [...prevForm.curriculumCreateDtos];
            curriculumCreateDtos.push({
                chapter: 0,
                curriculumTitle: "",
                lectureSum: 0
            });
            return {
                ...prevForm,
                curriculumCreateDtos
            };
        });
    };
    // const addSkill = () => {
    //     setForm((prevForm) => ({
    //         ...prevForm,
    //         skillList: [...prevForm.skillList, ""]
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.courseName);
        const formData = new FormData();
        formData.append("courseCreateDto", JSON.stringify(form));

        axios
            .post("http://54.180.213.187:8080/course-service/course/manage/new-course", formData)
            .then((response) => {
                // POST 요청 성공 처리
                console.log(response.data);
            })
            .catch((error) => {
                // POST 요청 실패 처리
                console.error(error);
            });
    };

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
                <br />

                <br />
                {/* Title Photo and other input fields */}
                <button type="submit">Submit</button>
            </form>
        );
    };

    return (
        <Body>
            <div>
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
                <select id="chapterCount" name="chapterCount" value={form.curriculumCreateDtos.length} onChange={handleChapterCountChange}>
                    <option value="0">선택하세요</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options as needed */}
                </select>

                {form.curriculumCreateDtos.map((curriculum, index) => (
                    <div key={index}>
                        <div>Chapter {curriculum.chapter}</div>
                        <label>
                            챕터 제목 :
                            <input
                                type="text"
                                name={`curriculumCreateDtos[${index}].curriculumTitle`}
                                value={curriculum.curriculumTitle}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            강의 개수 :
                            <input
                                type="number"
                                name={`curriculumCreateDtos[${index}].lectureSum`}
                                value={curriculum.lectureSum}
                                onChange={handleInputChange}
                                className="inputNumber"
                            />
                        </label>
                        <br />
                    </div>
                ))}

            </div>
            <CourseRegisterContent />
        </Body>
    );
};

export default CourseRegisterPage;
