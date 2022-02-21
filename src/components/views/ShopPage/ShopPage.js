import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import ImageSlider from "../../utils/ImageSlider";
import Checkbox from "./Section/CheckBox";
import RadioBox from "./Section/RadioBox";
import { Period, Price } from "./Section/Datas";
import SearchFeature from "./Section/SearchFeature";
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
  const [SearchTerm, setSearchTerm] = useState("");
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
  const handlePrice = (value) => {
    const data = Price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const handleFilters = (filters, category) => {
    const newFilters = { ...filtersObject };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
    showFilterdResult(newFilters);
    setFilters(newFilters);
  };
  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      skip: 0,
      limit: limit,
      filters: filtersObject,
      searchTerm: newSearchTerm,
    };
    setSkipNum(0);
    setSearchTerm(newSearchTerm);
    getTodos(body);

    //자식 컴포넌트 (search)에서 받은 값을 부모 state로 넣어준다.
    setSearchTerm(newSearchTerm);
  };
  return (
    <Layout>
      <div
        className="shop-contents-wrap"
        style={{ marginTop: "70px", paddingTop: "70px" }}
      >
        <div className="shop-title">Dream</div>
        {/* filter */}
        <div className="shop-check-wrap">
          {/* checkBox */}
          <Checkbox
            list={Period}
            handleFilters={(filters) => handleFilters(filters, "period")}
          />
          {/* radioBox */}
          <RadioBox
            list={Price}
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </div>

        {/* search */}
        <div className="search-wrap">
          <SearchFeature refeshFunction={updateSearchTerm} />
        </div>

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
