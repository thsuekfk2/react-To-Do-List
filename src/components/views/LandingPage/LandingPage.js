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
      <section className="first-page"></section>
      {/*cookies.x_auth ? ( //쿠키 값이 있으면 로그아웃 표시
        <button className="logout-btn" onClick={onClickHandler}>
          로그아웃
        </button>
      ) : (
        //쿠키 값이 있으면 로그인 표시
        <button className="login-btn">로그인</button>
      )*/}
    </div>
  );
}

export default withRouter(LandingPage);
