import "./Test.scss";
import "./App.css";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import TodoList from "./components/TodoList";
import Auth from "./hoc/auth";
import Mypage from "./components/views/Mypage/Mypage";
import CartPage from "./components/views/CartPage/CartPage";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    a{text-decoration: none;} 
    a:visited { color:black; }
    
  }
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);

  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, null)} />
        <Route exact path="/mypage" component={Auth(Mypage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, null)} />
        <Route exact path="/cart" component={Auth(CartPage, null)} />

        <Route exact path="/todo">
          <TodoList
            toDo={toDo}
            toDos={toDos}
            setToDo={setToDo}
            setTodos={setTodos}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
