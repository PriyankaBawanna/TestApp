import { LOGOUT_USER } from "@app/redux/constant";

export const logout = () => {
  console.log("Logout USer Action ISCalled ");
  return {
    type: LOGOUT_USER,
  };
};
