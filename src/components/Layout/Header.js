import React, { useState } from "react";
import "./Header.scss";
import { BiUser, BiBasket, BiMenu } from "react-icons/bi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="header-contens">
        <li className="menu-icon">
          <BiMenu />
        </li>

        <div className="header-logo">felices sueños</div>
        <nav className="header-nav">
          <ul>
            <li className="login-icon">
              <BiUser />
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
export default Header;
