import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";

function ShopPage() {
  useEffect(() => {
    let body = {};
    axios.post("/api/todo/todos").then((res) => {
      if (res.data.success) {
        console.log(res.data);
      } else {
        alert("상품들을 가져오는데 실패 했습니다.");
      }
    });
  }, []);
  return (
    <Layout>
      <div
        style={{ marginTop: "70px", paddingTop: "70px", textAlign: "center" }}
      >
        shop
      </div>
    </Layout>
  );
}

export default ShopPage;
