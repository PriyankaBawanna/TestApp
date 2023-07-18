import { GET_USER_DATA_SUCCESS } from "@app/redux/constant";
const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const getUserDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      console.log("GET_USER_DATA_SUCCESS");
      return {
        ...state,
        user: action.data,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
