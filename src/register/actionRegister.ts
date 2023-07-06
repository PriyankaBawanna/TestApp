import {
  REGISTER_NEW_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "@app/redux/constant";

export const registerUserRequest = ({ ...userData }) => {
  console.log("Add user Action is called ", userData);
  return {
    type: REGISTER_NEW_USER,
    userData,
  };
};

export const registerSuccess = (response: any) => {
  return {
    type: REGISTER_SUCCESS,
    response,
  };
};

export const registerFail = (error: any) => {
  return {
    type: REGISTER_FAIL,
    error,
  };
};
