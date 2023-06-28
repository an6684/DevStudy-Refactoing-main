import React, { useState } from "react";

function Edit({ storageData }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedContent, setSelectedContent] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const uniqueSubjects = [...new Set(storageData.map((data) => data.subject))];
  const [selectedCartState, setSelectedCartState] = useState("");
  
  // 선택한 과목에 따라 옵션을 필터링
  const filteredOptions = storageData.filter((data) => data.subject === selectedSubject);

  // 과목 선택 처리
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedTitle("");
    setSelectedContent("");
    setSelectedUrl("");
  };

  // 옵션 선택 처리
  const handleOptionChange = (e) => {
    const selectedOption = filteredOptions.find((data) => data.title === e.target.value);
    if (selectedOption) {
      setSelectedCartState(selectedOption.isCartState);
      setSelectedTitle(selectedOption.title);
      setSelectedContent(selectedOption.content);
      setSelectedUrl(selectedOption.url);
    } else {
      setSelectedTitle("");
      setSelectedContent("");
      setSelectedUrl("");
    }
    console.log(selectedOption.isCartState)
  };

  // 제목 변경 처리
  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedTitle===''){
      alert('제목을 입력하세요.');
    }else if(selectedContent===''){
        alert('컨텐츠를 입력하세요.')
    }else if(selectedUrl===''){
        alert('url을 입력하세요.')
    }else{
      // 변경된 데이터로 선택한 옵션 업데이트
      const updatedOption = {
        subject: selectedSubject,
        title: selectedTitle,
        content: selectedContent,
        url: selectedUrl,
        isCartState: selectedCartState, 
      };

      // storageData에서 선택한 옵션의 인덱스 찾기
      const selectedIndex = storageData.findIndex((data) => data.title === selectedTitle);

      if (selectedIndex !== -1) {
        // storageData에서 선택한 옵션 업데이트
        storageData[selectedIndex] = updatedOption;

        localStorage.setItem(selectedIndex, JSON.stringify(updatedOption));

        alert("데이터가 수정되었습니다.");
      } else {
        alert("선택된 옵션이 없습니다.");
      }
    }
  };

  return (
    <>
      <div className="edit-wrap">
        <form onSubmit={handleSubmit}>
          <article>
            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">-- 과목 선택 --</option>
              {uniqueSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </article>
          <article>
            <select value={selectedTitle} onChange={handleOptionChange}>
              <option value="">-- 제목 선택 --</option>
              {filteredOptions.map((data) => (
                <option key={data.title} value={data.title}>
                  {data.title}
                </option>
              ))}
            </select>
          </article>
          <article>
            <input
              type="text"
              placeholder="Title"
              value={selectedTitle}
              onChange={handleTitleChange}
            />
          </article>
          <article>
            <textarea
              value={selectedContent}
              placeholder="Content"
              onChange={(e) => setSelectedContent(e.target.value)}
            />
          </article>
          <article>
            <input
              type="text"
              placeholder="URL"
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
            />
          </article>
          <button type="submit">Edit</button>
        </form>
      </div>
    </>
  );
}

export default Edit;