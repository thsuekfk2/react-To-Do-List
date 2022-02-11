import React, { useEffect } from "react";
import TodoTemplate from "../../TodoTemplate";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(res=>{
      if (res.data.success) {
        props.history.push("/login");
      }else{
        alert('로그아웃이 실패했습니다.')
      }
    })
  }
  
  return (
    <div>
      <TodoTemplate>
        <h2>시작</h2>
        <button onClick={onClickHandler}>로그아웃</button>
      </TodoTemplate>
    </div>
  );
}

export default LandingPage;
