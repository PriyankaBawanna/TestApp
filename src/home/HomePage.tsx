import Logout from "@app/logout/logout";
import React, { useState, useEffect } from "react";
import "./homePageStyle.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const HomePage = () => {
  const userDetail = useSelector((state: any) => state.getUserDetailsReducer);
  const [details, setDetails] = useState(userDetail.user);
  console.log("USer Details ", details);

  // Update the state when the userDetail changes
  useEffect(() => {
    setDetails(userDetail.user);
  }, [userDetail]);

  return (
    <>
      <h1>Home Page</h1>
      <p>Name:{details.name}</p>
      <p>email: {details.email}</p>
      <p>Mobile {details.mobile}</p>
      <Logout />
      <Cart />
    </>
  );
};
export default HomePage;
