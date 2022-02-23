import React from "react";
import { Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_action";
function TodoInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 cart 필드에다가 넣어준다.
    //id와 갯수에 대한 정보, 언제 넣었는지 날짜정보가 필요하다.

    dispatch(addToCart(props.detail._id));
  };
  return (
    <div>
      <Descriptions title="Todo Info" bordered>
        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold"> {props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
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
