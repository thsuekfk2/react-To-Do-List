import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

//서버에 받은 데이터를 request에 저장을 하고

export function loginUser(dataToSubmit) {
  const request = axios.post("/api/users/login", dataToSubmit).then((res) => {
    console.log("로그인시", res.data);
    return res.data;
  });

  //request를 (타입과 payload) 리듀서로 보내야한다.
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => res.data);

  //request를 (타입과 payload) 리듀서로 보내야한다.
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/users/auth").then((res) => res.data);

  //request를 (타입과 payload) 리듀서로 보내야한다.
  return {
    type: AUTH_USER,
    payload: request,
  };
}
