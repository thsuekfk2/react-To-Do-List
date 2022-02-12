import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import { CookiesProvider } from "react-cookie";

//redux를 더 잘 사용할 수 있도록 도와주는 미들웨어
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Provider
          store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
            //Redux DevTools 추가 (툴을 이용해서 Redux를 편하게 사용 가능)
          )}
        >
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
