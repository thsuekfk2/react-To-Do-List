import React from "react";
import { Descriptions } from "antd";

function TodoInfo(props) {
  const clickHandler = () => {};
  return (
    <div>
      <Descriptions title="Todo Info" bordered>
        <Descriptions.Item label="Price">
          {" "}
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold"> {props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">
          {" "}
          {props.detail.views}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>

      <div>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
    </div>
  );
}

export default TodoInfo;
