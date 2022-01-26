import React from "react";
import TodoTemplate from "./TodoTemplate";
import ToDoHead from "./ToDoHead";

function TodoList(props) {
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
    </div>
  );
}

export default TodoList;
