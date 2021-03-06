import React, { useEffect, useState } from "react";
import "./Header.scss";
import { BiUser, BiBasket, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Badge, Avatar } from "antd";
const Header = (props) => {
  const user = useSelector((state) => state.user);
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
          <Link to="/">
            <span>
              <BiMenu />
            </span>
          </Link>
        </li>
        <div className="header-logo">
          <Link to="/">
            <span>felices sueños</span>
          </Link>
        </div>
        <nav className="header-nav">
          {user.userData && !user.userData.isAuth ? (
            <ul className="nav-menu-name">
              <li className="nav-about">ABOUT</li>
              <li className="nav-about">
                <Link to="/dream">DREAM</Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-menu-name">
              <li className="nav-about">ABOUT</li>
              <li className="nav-about">
                <Link to="/dream">DREAM</Link>
              </li>
              <li className="nav-list">
                <Link to="/todo/upload">TO DO</Link>
              </li>
            </ul>
          )}

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
              <Link to="/cart">
                <span>
                  <Badge count={5} offset={[10, 0]}>
                    <BiBasket />
                  </Badge>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default withRouter(Header);
