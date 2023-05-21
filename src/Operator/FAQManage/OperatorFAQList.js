import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import Body from "../../components/Body/Body";



const OperatorFAQList = () => {

    const [gData, setGeneral] = useState([]);
    const [eData, setEdu] = useState([]);
    const [newFaq, setNewFaq] = useState({ faqIndex : 0, type : "", faqTitle : "", faqContent: ""});
    const [showAddForm, setShowAddForm] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false); // isDeleted 상태 추가
    const [updateId, setUpdateId] = useState(-1);
    //새로고침해도..! 0아니고 ㄹㅇ 인덱스 보여주. . !

    useEffect(() => {

        axios.get(`/board-service/faq/show/listFaqGeneral`)

            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data);
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj = {
                        faqIndex: data.list[i].faqIndex,
                        faqTitle: data.list[i].faqTitle,
                        faqContent: data.list[i].faqContent,
                        type : data.list[i].type,

                    };
                    console.log(obj);
                    objects.push(obj);
                }
                setGeneral(objects);

                // 배열에 저장된 객체를 출력
                console.log(objects);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`/board-service/faq/show/listFaqAdu`)

            .then(response => {
                // response.data는 가져온 데이터를 의미합니다.
                console.log(response.data)
                const data = response.data;
                const objects = [];

                // 데이터에서 객체를 추출하여 배열에 추가
                for (let i = 0; i < data.list.length; i++) {
                    const obj = {
                        faqIndex: data.list[i].faqIndex,
                        faqTitle: data.list[i].faqTitle,
                        faqContent: data.list[i].faqContent,
                        type : data.list[i].type,
                    };
                    console.log(obj)
                    objects.push(obj);
                }
                setEdu(objects);
                // 배열에 저장된 객체를 출력
                console.log(objects);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`/board-service/faq/register`, newFaq)
            .then(response => {
                console.log(response);
                setNewFaq({type : "", faqTitle: "", faqContent: "" });
                if(newFaq.type === 'GENERAL_MEMBER') {
                    setGeneral([...gData, newFaq]);
                } else if(newFaq.type === 'EDUCATION'){
                    setEdu([...eData, newFaq]);
                }
                setShowAddForm(false);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewFaq({ ...newFaq, [name]: value });
        //여기 ...newFAQ맞는지 다시 확인해보기 5.14
    };

    const handleUpdate = (faqIndex) => {
        setUpdateId(faqIndex);
    }

    const onUpdateSubmit = useCallback(e => {
        e.preventDefault();
        console.log("ㅇ하잉");

        const setId = e.target.faqIndex.value;
        const setTitle = e.target.faqTitle.value;
        const setContent = e.target.faqContent.value;
        const setType = e.target.type.value;

        console.log(setId + setTitle +  setType+"??");

        const updatedFaq = {
            faqIndex: setId,
            faqTitle: setTitle,
            faqContent: setContent,
            type : setType,
        };

        axios.put(`/board-service/faq/update/${setId}`, updatedFaq)
            .then(response => {
                // 성공적으로 수정되었을 때의 처리
                console.log("FAQ 업데이트 성공:", response.data);
                // 필요한 작업 수행
            })
            .catch(error => {
                // 업데이트 실패 또는 오류 발생 시의 처리
                console.error("FAQ 업데이트 실패:", error);
                // 필요한 작업 수행
            });
    });


    const handleDelete = (faqIndex)=> {
        //delete는 body값으로 보내줘야됨.
        axios.delete(`/board-service/faq/delete/${faqIndex}`, {
            data : {
                faqIndex : {faqIndex}
            }
        })
            .then(response => {

                console.log(response);
                setIsDeleted(true); // 삭제가 완료되면 isDeleted 상태를 true로 업데이트
            })

            .catch(error => {
                console.error(error);
            })
    };
    const OperatorFAQPage = () => {
        return (

            <div className="whole">
                <h4>일반회원 FAQ List</h4>
                <form onSubmit={onUpdateSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>인덱스</th>
                                <th>제목</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                        {gData.map((item, index) => (
                            <tr key={item.faqIndex}>
                            {updateId === item.faqIndex ? (
                                <>
                                        <td><input type="hidden" name="faqIndex" defaultValue={item.faqIndex}/>{item.faqIndex}</td>
                                        <td><input type="text" name="faqTitle" defaultValue={item.faqTitle}/></td>
                                        <td><input type="text" name="faqContent" defaultValue={item.faqContent}/></td>
                                        <td><input type="hidden" name="type" defaultValue={item.type} /></td>
                                        <td colSpan="2" align="center">
                                            <button type="submit">저장</button>
                                        </td>
                                </>
                            ) : (
                                <>
                                    <td>{item.faqIndex}</td>
                                    <td>{item.faqTitle}</td>
                                    <td>{item.faqContent}</td>
                                    <td><button type="button" id={`gEdit-${index}`} onClick={() => handleUpdate(item.faqIndex) }>수정</button></td>
                                    <td><button type="button" id={`gDelete-${index}`} onClick={() => handleDelete(item.faqIndex) }>삭제</button></td>
                                </>
                            )}
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </form>
                <h4>교육 FAQ List</h4>
                <form onSubmit={onUpdateSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <th>인덱스</th>

                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {eData.map((item, index) => (
                            <tr key={item.faqIndex}>
                                {updateId === item.faqIndex ? (
                                    <>
                                        <td><input type="hidden" name="faqIndex" defaultValue={item.faqIndex}/>{item.faqIndex}</td>
                                        <td><input type="text" name="faqTitle" defaultValue={item.faqTitle}/></td>
                                        <td><input type="text" name="faqContent" defaultValue={item.faqContent}/></td>
                                        <td><input type="hidden" name="type" defaultValue={item.type} /></td>
                                        <td colSpan="2" align="center">
                                            <button type="submit">저장</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.faqIndex}</td>
                                        <td>{item.faqTitle}</td>
                                        <td>{item.faqContent}</td>
                                        <td><button type="button" id={`gEdit-${index}`} onClick={() => handleUpdate(item.faqIndex) }>수정</button></td>
                                        <td><button type="button" id={`gDelete-${index}`} onClick={() => handleDelete(item.faqIndex) }>삭제</button></td>
                                    </>
                                )}
                            </tr>
                        ))}

                        </tbody>

                    </table>
                </form>
                <button onClick={() => setShowAddForm(true)}>추가</button>
                {showAddForm &&
                    <form onSubmit={handleAddFormSubmit}>
                        <label>
                            <input type="radio" id="general" name="type" value="GENERAL_MEMBER" onChange={handleInputChange} />
                            일반회원
                        </label>
                        <label>
                            <input type="radio" id="edu" name="type" value="EDUCATION" onChange={handleInputChange} />
                            교육
                        </label>
                        <label>
                            제목:
                            <input type="text" name="faqTitle" value={newFaq.faqTitle} onChange={handleInputChange} />
                        </label>
                        <label>
                            내용:
                            <textarea name="faqContent" value={newFaq.faqContent} onChange={handleInputChange}></textarea>
                        </label>
                        <button type="submit" >확인</button>
                        <button type="button" onClick={() => setShowAddForm(false)}>취소</button>

                    </form>
                }
                <div>
                    {isDeleted && <div>삭제가 완료되었습니다.</div>}
                </div>
            </div>
        );
    }

    return(
        <Body>
            <OperatorFAQPage/>
        </Body>
    )

}

export default OperatorFAQList;

