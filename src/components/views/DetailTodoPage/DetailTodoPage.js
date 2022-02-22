import axios from "axios";
import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";

function DetailTodoPage(props) {
  const todoId = props.match.params.todoId;

  useEffect(() => {
    axios.get(`/api/todo/todo_by_id?id=${todoId}&type=single`).then((res) => {
      if (res.data.success) {
        console.log(res.data);
      } else {
        alert("상세 정보 가져오기를 실패했습니다.");
      }
    });
  }, []);
  return <Layout>DetailTodoPage</Layout>;
}

export default DetailTodoPage;
