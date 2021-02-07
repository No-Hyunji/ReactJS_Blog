/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

// 하나의 HTML 덩어리
function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "여자 바지 추천",
  ]);

  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  // var 어레이 = [2, 3, 4];

  // var 뉴어레이 = 어레이.map(function (a) {
  //   return a * 2;
  // });

  /*
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }
  */
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 7일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 8일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3
          onClick={() => {
            modal변경(true);
          }}
        >
          {글제목[2]}
        </h3>
        <p>2월 9일 발행</p>
        <hr />
      </div>

      {글제목.map(function (a) {
        return <div>안녕</div>;
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
