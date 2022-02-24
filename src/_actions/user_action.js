import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
} from "./types";

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

export function addToCart(id) {
  let body = {
    todoId: id,
  };
  const request = axios
    .post("/api/users/addToCart", body)
    .then((res) => res.data);

  //request를 (타입과 payload) 리듀서로 보내야한다.
  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/todo/todo_by_id?id=${cartItems}&type=array`)
    .then((res) => {
      //CartItem들에 해당하는 정보들을
      //todo collection에서 가져온후에
      //Quantity 정보를 넣어준다.
      userCart.forEach((cartItem) => {
        res.data.todo.forEach((todotDetail, index) => {
          if (cartItem.id === todotDetail._id) {
            res.data.todo[index].quantity = cartItem.quantity;
          }
        });
      });
      // console.log("res", res.data);
      return res.data;
    });

  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}
