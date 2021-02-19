/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

// 하나의 HTML 덩어리
function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "파이썬 독학",
    "여자 바지 추천",
  ]);

  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글) {
        return (
          <div className="list">
            <h3>{글}</h3>
            <p>2월 8일 발행</p>
            <hr />
          </div>
        );
      })}

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
