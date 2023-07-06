import { GET_USER_DATA_SUCCESS } from "@app/redux/constant";
export const getLoginUserData = (data: any) => {
  console.log("Get User Data action is called  ", data);
  return {
    type: GET_USER_DATA_SUCCESS,
    data,
  };
};
