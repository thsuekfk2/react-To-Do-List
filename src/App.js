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
const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
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
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/mypage" component={Auth(Mypage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />

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
