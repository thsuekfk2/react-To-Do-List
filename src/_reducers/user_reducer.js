import { LOGIN_USER } from "../_actions/types";

//전 state, action => nextState
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
