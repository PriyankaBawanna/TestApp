export const REGISTER_NEW_USER = "REGISTER_NEW_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const registerAPI = "http://localhost:8085/add/addUser";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const testSessionURL =
  "http://localhost:8085/sessionForTest/test-sessions";
export const login = "http://localhost:8085/login/loginUser";

export const getQuestions = `http://localhost:8085/noOfQuestions/questions?numQuestions=`;
export const saveUserResponseURL = `http://localhost:8085/userResponse/user-response`;
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const QUESTIONS_NO_OF = "QUESTIONS_NO_OF";
export const GET_TEST_DETAILS = "GET_TEST_DETAILS";

//*timer
export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const TIMER_TICK = "TIMER_TICK";

//Questions
export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";
export const SUBMIT_RESPONSE_REQUEST = "SUBMIT_RESPONSE_REQUEST";
export const SUBMIT_RESPONSE_SUCCESS = "SUBMIT_RESPONSE_SUCCESS";
export const SUBMIT_RESPONSE_FAILURE = "SUBMIT_RESPONSE_FAILURE";
export const INCREMENT_QUESTION_INDEX = "INCREMENT_QUESTION_INDEX";
export const DECREMENT_QUESTION_INDEX = "DECREMENT_QUESTION_INDEX";
export const SET_CURRENT_QUESTION_INDEX = "SET_CURRENT_QUESTION_INDEX";
//sessions for Test

export const CREATE_TEST_SESSION = "CREATE_TEST_SESSION";
export const SET_CURRENT_TEST_SESSION = "SET_CURRENT_TEST_SESSION";

export const UPDATE_USER_RESPONSE = "UPDATE_USER_RESPONSE";

//show result
export const SHOW_RESULT_REQUEST = "SHOW_RESULT_REQUEST";
export const SHOW_RESULT_SUCCESS = "SHOW_RESULT_SUCCESS";
export const SHOW_RESULT_FAILURE = "SHOW_RESULT_FAILURE";
