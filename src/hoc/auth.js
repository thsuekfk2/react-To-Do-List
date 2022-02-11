import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck(props) {
    //back-end request 를 날려서 사람의 상태를 가져옴
    //쿠키를 이용해서 유저 판단
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);

        //분기처리
        //로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          //로그인 한 상태
          //1.admin이 아닌데 admin페이지를 들어가려고 할 때
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            //로그인한 유저가 출입불가능한 페이지를 가려고 할 때, (로그인 & 회원가입 페이지)
            if (option === false) props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
