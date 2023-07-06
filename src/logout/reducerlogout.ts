import { LOGOUT_SUCCESS, LOGOUT_FAILURE } from "@app/redux/constant";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      console.log("LogOut Reducer ");
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
