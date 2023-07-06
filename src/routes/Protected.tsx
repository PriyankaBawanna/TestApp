import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "@app/redux/constant";
function Protected({ children }) {
  let loginResponse = useSelector((state: any) => state.loginUserReducer);
  console.log("loginResponse user route", loginResponse);
  if (loginResponse.isLoggedIn) {
    return children;
  }
  console.warn("Login response fail", loginResponse.isLoggedIn);
  return <>Error page</>;
}
export default Protected;
