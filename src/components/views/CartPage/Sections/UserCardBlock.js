import React from "react";
import "./UserCardBlock.scss";
import { AiOutlineDelete } from "react-icons/ai";

function UserCardBlock(props) {
  console.log("장바구니", props.todo);
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  return (
    <div className="cart-table-wrap">
      <div className="cart-contents">
        {props.todo &&
          props.todo.map((todo, i) => (
            <div className="cart-item" key={i}>
              <div className="cart-delete-btn">
                <span>
                  <AiOutlineDelete />
                </span>
              </div>
              <div className="cart-image">
                <img
                  style={{ width: "70px", height: "50px" }}
                  src={renderCartImage(todo.images)}
                />
              </div>
              <div className="cart-quantity">{todo.quantity}개</div>
              <div className="cart-price">{todo.price} 원</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserCardBlock;
