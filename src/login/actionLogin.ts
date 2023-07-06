import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from "@app/redux/constant";
export const loginUser = (data: any) => {
  console.log(" 1 Login User action  Called ", data);
  return {
    type: LOGIN_USER,
    data: data,
  };
};
export const loginSuccess = (response: any) => {
  console.log("2 Login Success Action is Called ", response);
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const loginFail = (error: any) => {
  return {
    type: LOGIN_FAIL,
    error,
  };
};
