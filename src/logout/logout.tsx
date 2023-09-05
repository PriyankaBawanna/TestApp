import Button from "@app/commonComp/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@app/logout/actionLogout";

import { useNavigate } from "react-router-dom";
import { allRoutes } from "@app/constant/path";
const Logout = () => {
  const navigate = useNavigate();
  const userLoginSession = useSelector((state: any) => state.authReducer);

  const dispatch = useDispatch();
  const handleUserLogout = () => {
    console.log("1.Logout button is Clicked ");
    dispatch(logout());
    if (!userLoginSession) {
      navigate(allRoutes.login);
    }
  };
  return (
    <>
      <Button label={"Logout"} onClick={handleUserLogout} />
    </>
  );
};
export default Logout;
