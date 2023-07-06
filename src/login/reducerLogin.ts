import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_USER } from "@app/redux/constant";
const initialState = { isFetching: false, isLoggedIn: false };
export const loginUserReducer = (data = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...data,
        isFetching: true,
      };

    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        isFetching: false,
        isLoggedIn: false,
      };
    default:
      return initialState;
  }
};
