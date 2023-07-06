import {
  REGISTER_FAIL,
  REGISTER_NEW_USER,
  REGISTER_SUCCESS,
} from "@app/redux/constant";

const initialState = { isLoading: false, isRegister: false };
export const registerNewUser = (data = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {
        ...data,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        isLoading: false,
        isRegister: true,
      };
    case REGISTER_FAIL:
      return {
        isLoading: false,
        isRegister: false,
      };
    default:
      return initialState;
  }
};
