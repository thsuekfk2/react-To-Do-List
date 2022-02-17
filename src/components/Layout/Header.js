import React, { useEffect, useState } from "react";
import "./Header.scss";
import { BiUser, BiBasket, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    return () => setNavbar(true);
  }, []);

  const changeBackground = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

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

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      id="header"
      className={
        window.location.pathname === "/"
          ? navbar
            ? "header active"
            : "header"
          : "header active"
      }
    >
      <div className="header-contens">
        <li className="menu-icon">
          <BiMenu />
        </li>
        <div className="header-logo">felices sueños</div>
        <nav className="header-nav">
          <ul className="nav-menu-name">
            <li className="nav-about">ABOUT</li>
            <li className="nav-list">TO DO</li>
          </ul>
          <ul className="nav-menu-icon">
            <li className="login-icon">
              {cookies.x_auth ? ( //쿠키 값이 있으면 로그아웃 표시
                <Link to="/mypage">
                  <BiUser />
                </Link>
              ) : (
                //쿠키 값이 없으면 로그인 표시
                <Link to="/login">
                  <span>
                    <BiUser />
                  </span>
                </Link>
              )}
            </li>
            <li className="basket-icon">
              <BiBasket />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default withRouter(Header);
