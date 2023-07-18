import axios from "axios";
import { getQuestions } from "@app/redux/constant";
import debounce from "lodash/debounce";

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

export const fetchQuestionsAPI = async (
  getQuestions: any,
  noOfQuestions: number
) => {
  try {
    let questions = await axios.get(`${getQuestions}${noOfQuestions}`);

    return questions;
  } catch {
    return null;
  }
};

/** API Calling for the generate Test Session  */
export const createTestSession = async (url: any, payload: any) => {
  try {
    let res = await axios.post(url, payload);
    const { data } = res;
    return data;
  } catch {
    return null;
  }
};

export const saveUserResponse = debounce(async (url, action) => {
  try {
    let response;

    console.log("@APP", url, action.payload);
    response = await axios.post(url, action.payload);

    console.log("@Response", response.status);
    return response.status;
  } catch (error) {
    throw new Error(error.message);
  }
}, 500);

export const updateUserResponse = debounce(async (action) => {
  try {
    const { sessionId, QuestionId } = action.payload;

    const updateResponse = await axios.put(
      `http://localhost:8085/update-response/testResults/${sessionId}/userAnswer/${QuestionId}`,
      action.payload
    );
    console.log("updateResponse.status", updateResponse.status);
    return updateResponse.status;
  } catch {
    throw new Error(error.message);
  }
});

export const fetchResultData = async (payload: any) => {
  try {
    let res = await axios.post(
      `http://localhost:8085/result/generateResult/${payload}`
    );
    const { data } = res;
    return data;
  } catch {
    return null;
  }
};
