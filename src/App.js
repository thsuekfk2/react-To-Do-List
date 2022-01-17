import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        />
        <button>ADD TO DO</button>
      </form>
      <hr />
      <ul>
        {toDos.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
