import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./CartPage.scss";
function CartPage(props) {
  return (
    <div>
      <Layout>
        <div className="cart-contents-wrap">장바구니</div>
      </Layout>
    </div>
  );
}

export default withRouter(CartPage);
