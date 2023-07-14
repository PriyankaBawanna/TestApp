// reducers.js

import {
  CREATE_TEST_SESSION,
  SET_CURRENT_TEST_SESSION,
} from "@app/redux/constant";

const initialState = {
  currentTestSession: null,
  sessions: {}, // Store session information
};

export const instructionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TEST_SESSION:
      console.log("1 create session Reducer ");
      // Create a new test session based on the payload (e.g., test-A, test-B, test-C)
      const sessionId = `${action.payload}-${new Date().getTime()}`; // Generate a unique session ID

      const newSession = {
        testName: action.payload,
        sessionId,
        startTime: new Date(),
      };

      return {
        ...state,
        sessions: {
          ...state.sessions,
          [sessionId]: newSession,
        },
      };
    case SET_CURRENT_TEST_SESSION:
      console.log("1 SET_CURRENT_TEST_SESSION Reducer ");
      // Set the current test session based on the payload (e.g., test-A, test-B, test-C)
      return {
        ...state,
        currentTestSession: action.payload,
      };
    default:
      return state;
  }
};
