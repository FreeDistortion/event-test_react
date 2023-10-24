import React from "react";

// event 연결1
// 미리 함수를 만들고 연결해서 사용하는 방식
const EventTest = () => {
  function showMsg() {
    alert("event check");
  }

  function showData(data) {
    alert("value: " + data);
  }

  // event hanlder에 연결된 함수는 parameter에 event object를 받을 수 있다.
  function showText(e){
    // parameter.target object는 event를 발생시킨 object를 의미하며, object가 갖는 고유한 속성 또는 method에 접근 가능.
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>event test</h1>
      <hr />
      <button onClick={showMsg}>event button1</button>

      <button
        onClick={function () {
          alert("define event directly");
        }}
      >
        event button2
      </button>

      <button
        onClick={function () {
          showData(1000);
        }}
      >
        event button3
      </button>

        <input type="text" onChange={showText}/>

    </div>
  );
};

export default EventTest;
