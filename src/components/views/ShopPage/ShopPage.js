import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import "./ShopPage.scss";
function ShopPage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let body = {};
    axios.post("/api/todo/todos").then((res) => {
      if (res.data.success) {
        setTodos(res.data.todoInfo);
      } else {
        alert("상품들을 가져오는데 실패 했습니다.");
      }
    });
  }, []);
  const renderCards = todos.map((todo, i) => {
    console.log(todo);
    return (
      <div key={i}>
        <div className="shop-card-img">
          <img src={`http://localhost:5000/${todo.images[0]}`} />
        </div>
        <div className="shop-card-contents">
          <ul>
            <li>Dream : {todo.title}</li>
            <li>Description : {todo.description}</li>
            <li>{todo.price} 원</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <div
        className="shop-contents-wrap"
        style={{ marginTop: "70px", paddingTop: "70px" }}
      >
        <div className="shop-title">shop</div>
        {/* filter */}
        {/* search */}

        <div className="shop-card">{renderCards}</div>
        <div className="shop-more">more</div>
      </div>
    </Layout>
  );
}

export default ShopPage;
