import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Cart = ({ heading, link, noOfQuestion, questionCart, time }) => {
  return (
    <>
      <>
        <div className="cart-test-details">
          <Link to={link}>
            <h5>{heading}</h5>
          </Link>
        </div>
      </>
    </>
  );
};
export default Cart;
