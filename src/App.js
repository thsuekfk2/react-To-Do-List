import "./Test.scss";
import "./App.css";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Mypage from "./components/views/Mypage/Mypage";
import CartPage from "./components/views/CartPage/CartPage";
import UploadListPage from "./components/views/UploadListPage/UploadListPage.js";
import ShopPage from "./components/views/ShopPage/ShopPage.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    a{text-decoration: none;} 
    a:visited { color:black; }
    
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, null)} />
        <Route exact path="/mypage" component={Auth(Mypage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, null)} />
        <Route exact path="/cart" component={Auth(CartPage, null)} />
        <Route exact path="/dream" component={Auth(ShopPage, null)} />
        <Route
          exact
          path="/todo/upload"
          component={Auth(UploadListPage, true)}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
