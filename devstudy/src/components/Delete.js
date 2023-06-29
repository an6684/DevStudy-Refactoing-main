import React, { useState } from "react";
import datas from "../components/datas";


function Delete({storageData}){
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const filteredDatas=datas.filter(data=>data.id<=5);

    // 선택한 과목에 따라 옵션을 필터링
    const filteredOptions = storageData.filter((data) => data.subject === selectedSubject);
    // 과목 선택 처리
    const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedTitle("");
    };
    let selectedOption;
    // 옵션 선택 처리
    const handleOptionChange = (e) => {
    selectedOption = filteredOptions.find((data) => data.title === e.target.value);
    console.log(selectedOption)
    if (selectedOption) {
        setSelectedTitle(selectedOption.title);
        } else {
            setSelectedTitle("");
        }
    };

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('해당 데이터를 삭제하시겠습니까?')){
            localStorage.removeItem(selectedTitle)
            alert("데이터가 삭제되었습니다.");
        }
    };

    return(
        <>
        <div className="edit-wrap">
            <form onSubmit={handleSubmit}>
            <article>
                <select value={selectedSubject} onChange={handleSubjectChange}>
                <option value="">-- 과목 선택 --</option>
                {filteredDatas.map((subject) => (
                    <option key={subject.id} value={subject.title}>
                    {subject.title}
                    </option>
                ))}
                </select>
            </article>
            <article>
                <select value={selectedTitle} onInput={handleOptionChange}>
                <option value="">-- 제목 선택 --</option>
                {filteredOptions.map((data) => (
                    <option key={data.title} value={data.title}>
                    {data.title}
                    </option>
                ))}
                </select>
            </article>
            <button type="submit">Delete</button>
            </form>
        </div>
    </>
    )
}

export default Delete;