import "./Test.scss";
import "./App.css";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    text-align: center;
  }
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);

  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/register" component={RegisterPage} />

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
