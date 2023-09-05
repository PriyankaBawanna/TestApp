import { LOGIN_FAIL, LOGOUT_FAILURE } from "@app/redux/constant";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_FAIL:
      console.log("Logout User Reducer Is called ");
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
