import "./Main.scss";
import Header from "./Header";
import ImageSlider from "../utils/ImageSlider";
import "antd/dist/antd.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let body = {
      skip: 0,
      limit: 3,
    };
    getTodos(body);
  }, []);

  const getTodos = (body) => {
    axios.post("/api/todo/todos", body).then((res) => {
      if (res.data.success) {
        setTodos(res.data.todoInfo);
      } else {
        alert("상품들을 가져오는데 실패 했습니다.");
      }
    });
  };
  return (
    <div>
      <Header />
      <div className="main-image"></div>
      <MainItem
        title={"felices sueños"}
        contents1={"당신은 오늘 무슨 꿈을 꾸셨나요? "}
        contents2={"당신의 꿈을 담아보세요"}
      />
      <MainItem
        title={"Dreams come true"}
        contents1={"누군가의 꿈들 입니다"}
        contents2={"당신도 포기하지마세요"}
      />
      <div className="gallery-wrapper">
        {todos.map((todo, i) => (
          <div key={i}>
            <div style={{ width: "300px", height: "300px" }}>
              <ImageSlider images={todo.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function MainItem(props) {
  return (
    <div>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-title">
            <p>{props.title}</p>
          </div>
          <div className="main-contents-item">
            <p>{props.contents1}</p>
            <p>{props.contents2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
