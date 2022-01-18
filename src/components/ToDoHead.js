import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function TodoHead() {
  let now = new Date();
  let year = now.getFullYear();
  let Mohth = now.getMonth() + 1;
  let date = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];
  return (
    <TodoHeadBlock>
      <h1>TODO LIST</h1>
      <div className="day">
        {year}. {Mohth}. {date}. {dayOfWeek}요일
      </div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
