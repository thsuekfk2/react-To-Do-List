import { Axios } from "axios";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };
  return (
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

        <label>Name</label>
        <input type="test" value={Name} onChange={onNameHandler}></input>

        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        ></input>

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        ></input>

        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
