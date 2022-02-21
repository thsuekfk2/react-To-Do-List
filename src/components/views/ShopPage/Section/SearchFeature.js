import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

function SearchFeature(props) {
  const [SeacherTerm, setSeacherTerm] = useState("");
  const searchHandler = (event) => {
    setSeacherTerm(event.currentTarget.value);
    props.refeshFunction(event.currentTarget.value);
    //타이핑 해서 바뀐 값이 부포컴포넌트로 보내진다.
  };
  return (
    <Search
      placeholder="input search text"
      onChange={searchHandler}
      style={{ width: 200 }}
      value={SeacherTerm}
    />
  );
}

export default SearchFeature;
