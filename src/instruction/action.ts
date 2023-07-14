import {
  CREATE_TEST_SESSION,
  SET_CURRENT_TEST_SESSION,
} from "@app/redux/constant";

export const createTestSession = (testName: any) => {
  console.log("1 create session");
  return {
    type: CREATE_TEST_SESSION,
    payload: testName,
  };
};

export const setCurrentTestSession = (testName: any) => {
  console.log("2  setCurrentTestSession");
  return {
    type: SET_CURRENT_TEST_SESSION,
    payload: testName,
  };
};
