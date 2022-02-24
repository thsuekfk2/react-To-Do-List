import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { getCartItems } from "../../../_actions/user_action";
import UserCardBlock from "./Sections/UserCardBlock";
import "./CartPage.scss";
function CartPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart));
      }
    }
  }, [props.user.userData]);
  return (
    <div>
      <Layout>
        <div
          className="cart-contents-wrap"
          style={{ marginTop: "70px", paddingTop: "70px" }}
        >
          <div className="cart-title">Cart</div>
          <UserCardBlock
            todo={props.user.cartDetail && props.user.cartDetail.todo}
          />
        </div>
      </Layout>
    </div>
  );
}

export default withRouter(CartPage);
