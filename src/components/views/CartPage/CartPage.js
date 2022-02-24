import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { getCartItem } from "../../../_actions/user_action";
import "./CartPage.scss";
function CartPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let cartItems = [];
    //리덕스 user state , cart 안에 상품이 들어있는지 확인
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        dispatch(getCartItem(cartItems, props.user.userData.cart));
      }
    }
  }, [props.user.userData]);
  return (
    <div>
      <Layout>
        <div className="cart-contents-wrap">장바구니</div>
      </Layout>
    </div>
  );
}

export default withRouter(CartPage);
