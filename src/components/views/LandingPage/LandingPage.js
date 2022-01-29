import React, { useEffect } from "react";
import TodoTemplate from "../../TodoTemplate";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <TodoTemplate>
        <h2>시작</h2>
      </TodoTemplate>
    </div>
  );
}

export default LandingPage;
