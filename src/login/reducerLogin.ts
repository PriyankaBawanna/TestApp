import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_USER } from "@app/redux/constant";
const initialState = { isFetching: false, isLoggedIn: false };
export const loginUserReducer = (data = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("Request ");
      return {
        ...data,
        isFetching: true,
      };

    case LOGIN_SUCCESS:
      alert("Login sucess ");
      return {
        isFetching: false,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      console.log("Login Fail ");
      return {
        isFetching: false,
        isLoggedIn: false,
      };
    default:
      return data;
  }
};
