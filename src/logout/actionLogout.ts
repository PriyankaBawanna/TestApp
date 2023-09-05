import { LOGIN_FAIL } from "@app/redux/constant";

export const logout = () => {
  console.log("2.logout actions is called ");
  return {
    type: LOGIN_FAIL,
  };
};
