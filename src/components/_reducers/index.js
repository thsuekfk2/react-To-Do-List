import { combineReducers } from "redux";
//store에 reducer가 여러개 있을 수 있다.
//reducer은 어떻게 state가 변하는지 보여주고 마지막 값을 리턴하는 것

//import user from './user_reducer';

const rootReducer = combineReducers({
  //combineReducers을 이용해서 root reducer에서 하나로 합쳐줌
  //user
});

export default rootReducer;
