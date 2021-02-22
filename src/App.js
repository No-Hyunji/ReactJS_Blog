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

  let [누른제목, 누른제목변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3 onClick={()=>{누른제목변경(i)}}>
              {글}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1)
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>2월 8일 발행</p>
            <hr />
          </div>
        );
      })}

      <button onClick={() => { 누른제목변경(0) }} > 1 </button>
      <button onClick={() => { 누른제목변경(1) }} > 2 </button>
      <button onClick={() => { 누른제목변경(2) }} > 3 </button>
      <button onClick={() => { modal변경(!modal)}}>모달 </button>

      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
