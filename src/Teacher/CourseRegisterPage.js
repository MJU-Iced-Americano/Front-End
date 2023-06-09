import Body from "../components/Body/Body";
import React, {useState} from "react";
import '../Teacher/styles/CourseRegisterPage.css';
import {Link} from "react-router-dom";
import axios from "axios";

const CourseRegisterPage = () => {
    const [skillInput, setSkillInput] = useState("");
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken =  "Bearer "+document.cookie.substring(name.length, document.cookie.length);
    const [titlePhoto, setPhoto] = useState();

    const [form, setForm] = useState({
        category: "",
        courseName: "",
        price: 0,
        courseDescription: "",
        difficulty: 1,
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

    const onImageHandler = (e) => {
        const photo = e.target.files[0];
        setPhoto(photo);
        const {name} = e.target;
        console.log(name, photo , "입니다용?");

        setForm((prevForm) => ({
            ...prevForm,
            [name]: titlePhoto
        }));


    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

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
        console.log(titlePhoto, "들어왔을가요 혹시??");

        // form 데이터를 formData로 변환
        const formData = new FormData();
        // formData.append("category", form.category);
        // formData.append("courseName", form.courseName);
        // formData.append("price", form.price);
        // formData.append("courseDescription", form.courseDescription);
        // formData.append("difficulty", form.difficulty);
        // formData.append("skillList", JSON.stringify(form.skillList));

        // formData.append("titlePhoto", new Blob(JSON.stringify(form.titlePhoto)), { type: "application/json" });

        const courseCreateDto = {
            "category": form.category,
            "courseName": form.courseName,
            "price": form.price,
            "courseDescription": form.courseDescription,
            "difficulty": form.difficulty,
            "skillList": JSON.stringify(form.skillList),
            "curriculumCreateDtos": form.curriculumCreateDtos

        };
        console.log(courseCreateDto , "!");
        formData.append("courseCreateDto", new Blob([JSON.stringify(courseCreateDto)], { type: "application/json" }));
        // form.curriculumCreateDtos.forEach((curriculum, index) => {
        //     formData.append(`curriculumCreateDtos[${index}].chapter`, curriculum.chapter);
        //     formData.append(`curriculumCreateDtos[${index}].curriculumTitle`, curriculum.curriculumTitle);
        //     formData.append(`curriculumCreateDtos[${index}].lectureSum`, curriculum.lectureSum);
        // });

        formData.append("titlePhoto", titlePhoto);

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        // POST 요청 보내기
        await axios({
            method: 'post',
            url: "http://gateway.socoa.online:8000/course-service/course/manage/new-course",
            data: formData,
            headers: {
                "Authorization" : ssoToken,
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log("djd..");
            console.log("등록 완료:", response.data)
        }).catch(error => {
            console.log("d엑..");
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
                    썸네일 사진 등록 :
                    <input accept='image/*' placeholder="코스 썸네일 사진을 첨부해주세요. " onChange={onImageHandler} className="" type="file"/>
                </label>
                <label>
                    Skill List:
                    <input
                        type="text"
                        name="skillList"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                    />
                </label>

                <label>
                    <button type="button" onClick={addSkill}>Add Skill</button>
                </label>
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