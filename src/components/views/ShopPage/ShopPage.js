import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import ImageSlider from "../../utils/ImageSlider";
import Checkbox from "./Section/CheckBox";
import { Period } from "./Section/Datas";

import "./ShopPage.scss";
function ShopPage() {
  const [todos, setTodos] = useState([]);
  const [skipNum, setSkipNum] = useState(0);
  const [limit, setLimit] = useState(3);
  const [postSize, setPostSize] = useState(0);
  const [filtersObject, setFilters] = useState({
    period: [],
    price: [],
  });
  useEffect(() => {
    let body = {
      skip: skipNum,
      limit: limit,
    };
    getTodos(body);
  }, []);

  const getTodos = (body) => {
    //스킵만 다르게 해준 상태로 todo 데이터를 가져오는 코드와 동일하다
    //중복되는 코드이기 때문에 함수를 만들어 준다.
    axios.post("/api/todo/todos", body).then((res) => {
      if (res.data.success) {
        if (body.loadMore) {
          setTodos([...todos, ...res.data.todoInfo]);
        } else {
          setTodos(res.data.todoInfo);
        }
        setPostSize(res.data.postSize);
      } else {
        alert("상품들을 가져오는데 실패 했습니다.");
      }
    });
  };

  const loadMoreHandler = () => {
    let skip = skipNum + limit;
    let body = {
      skip: skip,
      limit: limit,
      loadMore: true,
    };
    getTodos(body);
    setSkipNum(skip);
  };

  const renderCards = todos.map((todo, i) => {
    return (
      <div key={i}>
        <div className="shop-card-img">
          <ImageSlider images={todo.images} />
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
  const showFilterdResult = (filters) => {
    let body = {
      skip: 0, //처음 데이터 부터 다시 가져와야 함
      limit: limit,
      filters: filters,
    };
    getTodos(body);
    setSkipNum(0);
  };
  const handleFilters = (filters, category) => {
    const newFilters = { ...filtersObject };
    newFilters[category] = filters;
    showFilterdResult(newFilters);
  };

  return (
    <Layout>
      <div
        className="shop-contents-wrap"
        style={{ marginTop: "70px", paddingTop: "70px" }}
      >
        <div className="shop-title">Dream</div>
        {/* filter */}

        {/* checkBox */}
        <Checkbox
          list={Period}
          handleFilters={(filters) => handleFilters(filters, "period")}
        />
        {/* radioBox */}
        {/* search */}

        {/* card */}
        <div className="shop-card">{renderCards}</div>
        {postSize >= limit && (
          <button className="shop-more" onClick={loadMoreHandler}>
            more
          </button>
        )}
      </div>
    </Layout>
  );
}

export default ShopPage;
