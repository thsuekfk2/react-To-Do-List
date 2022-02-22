import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import "./DetailTodoPage.scss";
import TodoImage from "./Sections/TodoImage";
import TodoInfo from "./Sections/TodoInfo";
import { Row, Col } from "antd";
function DetailTodoPage(props) {
  const todoId = props.match.params.todoId;

  //상세 페이지 정보
  const [Todo, setTodo] = useState({});
  useEffect(() => {
    axios.get(`/api/todo/todo_by_id?id=${todoId}&type=single`).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        setTodo(res.data.todo[0]);
      } else {
        alert("상세 정보 가져오기를 실패했습니다.");
      }
    });
  }, []);
  return (
    <Layout>
      <div className="detail-wrap">
        <div className="detail-title">
          <h1>{Todo.title}</h1>
        </div>

        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
            {/* ProductImage */}
            <TodoImage detail={Todo} />
          </Col>

          <Col lg={12} sm={24}>
            {/* ProductInfo */}
            <TodoInfo detail={Todo} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default DetailTodoPage;
