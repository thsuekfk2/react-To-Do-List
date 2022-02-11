import { Axios } from "axios";
import React, { useState } from "react";
import TodoTemplateBlock from "../../TodoTemplate";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import {withRouter} from 'react-router-dom'


function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //preventDefault를 해주는 이유?
    //안해줄 경우 누르면 리프레쉬가 된다. 리프레쉬를 막기 위해!

    let body = {
      email: Email,
      password: Password,
    };
    //redux를 사용하여
    //디스패치를 이용해서 loginUser액션을 취함
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      }
    });
  };
  return (
    <TodoTemplateBlock>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler}></input>
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          ></input>
          <br />
          <button>Login</button>
        </form>
      </div>
    </TodoTemplateBlock>
  );
}

export default withRouter(LoginPage);
