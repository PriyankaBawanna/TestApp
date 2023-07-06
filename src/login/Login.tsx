import Button from "@app/commonComp/Button";
import Input from "@app/commonComp/Input";
import React, { useState, useEffect } from "react";
import { loginUser } from "@app/login/actionLogin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allRoutes } from "@app/constant/path";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginResponse = useSelector((state: any) => state.loginUserReducer);
  console.log("loginResponse", loginResponse.isLoggedIn);
  useEffect(() => {
    if (loginResponse.isLoggedIn) {
      alert("Welcome");
      navigate(allRoutes.home);
    }
  }, [loginResponse]);

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    const isEmail = /^\S+@\S+\.\S+$/.test(emailOrMobile);
    const isMobile = /^[0-9]{10}$/.test(emailOrMobile);

    if (isEmail) {
      // Input is an email

      const body = {
        email: emailOrMobile,
        password: password,
      };
      dispatch(loginUser(body));
    } else if (isMobile) {
      // Input is a mobile number

      const body = {
        mobile: emailOrMobile,
        password: password,
      };
      dispatch(loginUser(body));
    }

    // if (loginResponse) {
    //   alert("welcome");
    //   console.log("After successfully login data ", loginResponse);
    //   // navigate("/homePage");
    //   //return <>Welcome</>;
    // } else {
    //   // navigate("/");
    // }

    // Reset form fields

    setEmailOrMobile("");
    setPassword("");
  };
  return (
    <>
      Login Page
      <Input
        label="Emailormobile"
        type="email"
        placeholder="emailormobile"
        name="email"
        value={emailOrMobile}
        onChange={(e: any) => setEmailOrMobile(e.target.value)}
      />
      <Input
        label="Password"
        type="Password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={handleUserLogin} label={"Login"} />
    </>
  );
};
export default Login;
