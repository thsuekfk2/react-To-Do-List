import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../../Layout/Layout";
import Main from "../../Layout/Main";
function LandingPage(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);
  console.log(cookies);

  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        removeCookie("x_auth"); //쿠키 삭제
        props.history.push("/login");
      } else {
        alert("로그아웃이 실패했습니다.");
      }
    });
  };

  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default withRouter(LandingPage);
