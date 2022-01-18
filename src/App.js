import "./Test.scss";
import "./App.css";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import ToDoHead from "./components/ToDoHead";
import { CSSTransition } from "react-transition-group";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    text-align: center;
  }
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  let [시작스위치, 시작스위치변경] = useState(false);

  return (
    <div>
      <GlobalStyle />

      <시작화면 시작스위치={시작스위치} 시작스위치변경={시작스위치변경} />

      <투두화면
        시작스위치={시작스위치}
        toDo={toDo}
        toDos={toDos}
        setToDo={setToDo}
        setTodos={setTodos}
        시작스위치변경={시작스위치변경}
      />
    </div>
  );
}
function 시작화면(props) {
  return (
    <div onClick={() => props.시작스위치변경(true)}>
      {props.시작스위치 === false ? (
        <TodoTemplate>
          <h2>시작</h2>
        </TodoTemplate>
      ) : null}
    </div>
  );
}

function 투두화면(props) {
  const onChange = (e) => props.setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (props.toDo === "") {
      return;
    }
    props.setTodos((currentArray) => [props.toDo, ...currentArray]);
    props.setToDo("");
  };
  return (
    <div>
      {props.시작스위치 === true ? (
        <TodoTemplate>
          <ToDoHead></ToDoHead>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={props.toDo}
              type="text"
              placeholder="write your to do"
            />
            <button>ADD TO DO</button>
          </form>
          <ul>
            {props.toDos.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </TodoTemplate>
      ) : null}
    </div>
  );
}

export default App;
