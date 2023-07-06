import axios from "axios";
//Receive the user registration API or user Data from registration saga
export const getRegisterRequest = async (url: any, payload: any) => {
  try {
    let data = await axios.post(url, payload);
    return data.data;
  } catch {
    return null;
  }
};

export const getRequest = async (url: any, payload: any) => {
  console.log("Get Request ", url, payload);
  try {
    let data = await axios.post(url, payload);

    return data;
  } catch {
    return null;
  }
};
