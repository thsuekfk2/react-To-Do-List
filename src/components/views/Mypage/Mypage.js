import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../../Layout/Layout";
import axios from "axios";
import "./Mypage.scss";

function Mypage(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        removeCookie("x_auth"); //쿠키 삭제
        props.history.push("/");
      } else {
        alert("로그아웃이 실패했습니다.");
      }
    });
  };

  return (
    <Layout>
      <div
        className="mypage-contents-wrap"
        style={{ marginTop: "70px", paddingTop: "70px" }}
      >
        <button className="logout-btn" onClick={onClickHandler}>
          로그아웃
        </button>
      </div>
    </Layout>
  );
}

export default withRouter(Mypage);
