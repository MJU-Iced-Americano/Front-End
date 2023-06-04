import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import Body from "../../components/Body/Body";
import '../styles/operatorFAQList.css';



const OperatorFAQList = () => {

    const [gData, setGeneral] = useState([]);
    const [eData, setEdu] = useState([]);
    const [newFaq, setNewFaq] = useState({ faqIndex : 0, type : "", faqTitle : "", faqContent: ""});
    const [showAddForm, setShowAddForm] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false); // isDeleted 상태 추가
    const [updateId, setUpdateId] = useState(-1);
    const name = 'SOCOA-SSO-TOKEN=';
    const ssoToken = "Bearer "+document.cookie.substring(name.length, document.cookie.length);

    //새로고침해도..! 0아니고 ㄹㅇ 인덱스 보여주. . !

    useEffect(() => {
        axios.get(`http://gateway.socoa.online:8000/board-service/faq/show/listFaqGeneral` , {
            headers: {
                "Authorization": ssoToken
                // Authorization : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdTc5TElKTS1oWXRsa2NrUmN0NnMwTDNWZ2JxU1g5eWN2VHpNNlBSand3In0.eyJleHAiOjE2ODU2MTI4ODgsImlhdCI6MTY4NTYxMjgyOCwiYXV0aF90aW1lIjoxNjg1NjEyODI4LCJqdGkiOiIyNTE3ZWRlZS1lMDExLTQ4MjktOWFmMC1iZTU4MWU3NThkY2EiLCJpc3MiOiJodHRwOi8vbG9naW4uc29jb2Eub25saW5lOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFkbWluLWNsaWVudCIsInN1YiI6ImY6Yjg4YTg1OGItMTczNC00ZTFiLThhMWEtMDlmODk0NjE5MWQ5OjBmMTg3ZTZlLTBlYzItNDI3Ni1hOWU3LTc5Y2FmZWI4ZGExNSIsInR5cCI6IklEIiwiYXpwIjoiYWRtaW4tY2xpZW50Iiwibm9uY2UiOiJhc2IzIiwic2Vzc2lvbl9zdGF0ZSI6ImQzNmYwZGQ3LWNhNTQtNGM5ZC05ZjBhLWViNTliOWJhNzIxMyIsImF0X2hhc2giOiIzUmR6NTNtSXVoaVhIYlVibTVnTmJRIiwiYWNyIjoiMSIsInNpZCI6ImQzNmYwZGQ3LWNhNTQtNGM5ZC05ZjBhLWViNTliOWJhNzIxMyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiRkVNQUxFIiwibmlja25hbWUiOiJoYXBweSIsInByZWZlcnJlZF91c2VybmFtZSI6ImhhcHB5In0.AH3qU5cgETf9tOhnMdLpEpWUKlho9uhP9hpMRMuIiz0S0r4NX6zLPXY1RfS2ULeJBrUQynMud56-mEGo9Z7FIiXEGxM9fptVzG8EFI7OOI7ex-8acJESsJ1BF4mCdDYktL_0CoEKtOeLES6UKL4KPacWL9f6zkjpk9Mmz8t-i_XU22Zm2Z7J_gt2PnDSnCQ3NA0e_BGKLUqDl5TKRHLFACzChrBN-2PfSzuPaO3kgGDBED_0Z34Jh4RttfjmlvivddYO2weJool335uVdJyIsYRzG_eJQXa3bTx6yzUxLAy9oxorlKZEKFx0X4bj7W3d21LmF5fpHE8L2lz6APl_TA
    }})

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

        axios.get(`http://gateway.socoa.online:8000/board-service/faq/show/listFaqAdu`, {
            headers: {
                "Authorization": ssoToken

            }})

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
                console.log(ssoToken);
        axios.post(`http://gateway.socoa.online:8000/board-service/faq/register`, newFaq, {
            // withCredentials:true,
            headers : {
                "Authorization" : ssoToken

            }

        })
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
              axios.put(`http://gateway.socoa.online:8000/board-service/faq/update/${setId}`, updatedFaq, {
            headers: {
                "Authorization": ssoToken
            }})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                // 업데이트 실패 또는 오류 발생 시의 처리
                console.error(error);
                // 필요한 작업 수행
            });
    });
    /////delete 추훋에. ..

    const handleDelete = (faqIndex)=> {
        //delete는 body값으로 보내줘야됨.
        axios.delete(`http://gateway.socoa.online:8000/board-service/faq/delete/${faqIndex}`, {
            data : {
                faqIndex : {faqIndex}
            },

            headers: {
                "Authorization": ssoToken

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
            <div className="OF_whole">
                <h4 className="FAQ_type">일반회원 FAQ List</h4>
                <form className="FAQ_form" onSubmit={onUpdateSubmit}>
                    <table className="FAQ_table">
                        <thead>
                        <tr>
                            <th className="table-header">인덱스</th>
                            <th className="table-header">제목</th>
                            <th className="table-header">내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {gData.map((item, index) => (
                            <tr key={item.faqIndex}>
                                {updateId === item.faqIndex ? (
                                    <>
                                        <td><input type="hidden" name="faqIndex" defaultValue={item.faqIndex} />{item.faqIndex}</td>
                                        <td><input className="text-input" type="text" name="faqTitle" defaultValue={item.faqTitle} /></td>
                                        <td><input className="text-input" type="text" name="faqContent" defaultValue={item.faqContent} /></td>
                                        <td><input type="hidden" name="type" defaultValue={item.type} /></td>
                                        <td colSpan="2" align="center">
                                            <button className="submit-button" type="submit">저장</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.faqIndex}</td>
                                        <td>{item.faqTitle}</td>
                                        <td>{item.faqContent}</td>
                                        <td className="button_dp"><button className="faq_button" type="button" id={`gEdit-${index}`} onClick={() => handleUpdate(item.faqIndex)}>수정</button></td>
                                        <td className="button_dp"><button className="faq_button" type="button" id={`gDelete-${index}`} onClick={() => handleDelete(item.faqIndex)}>삭제</button></td>
                                    </>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </form>
                <h4 className="FAQ_type">교육 FAQ List</h4>
                <form className="form" onSubmit={onUpdateSubmit}>
                    <table className="FAQ_table">
                        <thead>
                        <tr>
                            <th className="table-header">인덱스</th>
                            <th className="table-header">제목</th>
                            <th className="table-header">내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {eData.map((item, index) => (
                            <tr key={item.faqIndex}>
                                {updateId === item.faqIndex ? (
                                    <>
                                        <td><input type="hidden" name="faqIndex" defaultValue={item.faqIndex} />{item.faqIndex}</td>
                                        <td><input className="text-input" type="text" name="faqTitle" defaultValue={item.faqTitle} /></td>
                                        <td><input className="text-input" type="text" name="faqContent" defaultValue={item.faqContent} /></td>
                                        <td><input type="hidden" name="type" defaultValue={item.type} /></td>
                                        <td colSpan="2" align="center">
                                            <button className="faq_button" type="submit">저장</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.faqIndex}</td>
                                        <td>{item.faqTitle}</td>
                                        <td>{item.faqContent}</td>
                                        <td className="button_dp"><button className="faq_button" type="button" id={`gEdit-${index}`} onClick={() => handleUpdate(item.faqIndex)}>수정</button></td>
                                        <td className="button_dp"><button className="faq_button" type="button" id={`gDelete-${index}`} onClick={() => handleDelete(item.faqIndex)}>삭제</button></td>
                                    </>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </form>
                <button className="faq_button" onClick={() => setShowAddForm(true)}>추가</button>
                {showAddForm && (
                    <form className="FAQ_form" onSubmit={handleAddFormSubmit}>
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
                            <input className="text-input" type="text" name="faqTitle" value={newFaq.faqTitle} onChange={handleInputChange} />
                        </label>
                        <label>
                            내용:
                            <textarea className="text-area" name="faqContent" value={newFaq.faqContent} onChange={handleInputChange}></textarea>
                        </label>
                        <button className="faq_button" type="submit">확인</button>
                        <button className="faq_button" type="button" onClick={() => setShowAddForm(false)}>취소</button>
                    </form>
                )}
                <div>
                    {isDeleted && <div>삭제가 완료되었습니다.</div>}
                </div>
            </div>
        );
    };

    return(
        <Body>
            <OperatorFAQPage/>
        </Body>
    )

}

export default OperatorFAQList;

