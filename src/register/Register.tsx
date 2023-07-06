import Button from "@app/commonComp/Button";
import Input from "@app/commonComp/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserRequest } from "@app/register/actionRegister";
const Register = () => {
  const dispatch = useDispatch();

  const [inputDataNewUser, setInputDataNewUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const user = {
    name: inputDataNewUser.name,
    mobile: inputDataNewUser.mobile,
    email: inputDataNewUser.email,
    password: inputDataNewUser.password,
  };

  const handleUserChange = (event: any) => {
    const updatedForm = { ...inputDataNewUser };
    updatedForm[event.target.name] = event.target.value;
    setInputDataNewUser(updatedForm);
    // setFormsErrors(validationUserData(updatedForm));
    console.log("Input", inputDataNewUser);
  };

  const newUserRegister = (user: Object) => {
    console.log("Data ", user);
    dispatch(registerUserRequest(user));
  };
  return (
    <>
      Register
      <Input
        type="text"
        placeholder="Name"
        name="name"
        label={"name"}
        value={inputDataNewUser.name}
        onChange={handleUserChange}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        label={"Email"}
        value={inputDataNewUser.email}
        onChange={handleUserChange}
      />
      <Input
        type="text"
        placeholder="Mobile"
        name="mobile"
        label={"Mobile"}
        value={inputDataNewUser.mobile}
        onChange={handleUserChange}
      />
      <Input
        type="Password"
        placeholder="Password"
        name="password"
        className="input-filed"
        value={inputDataNewUser.password}
        onChange={handleUserChange}
      />
      <Button
        onClick={() => newUserRegister(user)}
        label={"SignUp"}
        className={"start-button"}
      />
    </>
  );
};
export default Register;
