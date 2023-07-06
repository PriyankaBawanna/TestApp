import { takeEvery, put } from "redux-saga/effects";
import { LOGIN_USER } from "@app/redux/constant";
import { loginSuccess, loginFail } from "./actionLogin";
import { getLoginUserData } from "@app/home/actions";
import { getRequest } from "@app/services/http";
import { login } from "@app/redux/constant";
import Cookies from "js-cookie";
function* checkLoginUser({ ...loginDetails }) {
  console.log("loginDetails", loginDetails.data.email);
  console.log("loginDetails", loginDetails.data.mobile);
  let response;
  try {
    // Check if emailOrMobile is an email or mobile number
    if (loginDetails.data.email) {
      // Perform login with email
      const body = {
        email: loginDetails.data.email,
        password: loginDetails.data.password,
      };
      response = yield getRequest(login, body);
    } else {
      // Perform login with mobile number
      const body = {
        mobile: loginDetails.data.mobile,
        password: loginDetails.data.password,
      };
      response = yield getRequest(login, body);
    }
    console.log("API Response ", response);
    const { token } = response.data;

    console.log("token is saga", token);
    // Check login response
    if (response.status === 200) {
      alert(response.data.message);
      // Login successful
      console.log("Successfully login ", response.data.user);
      yield put(getLoginUserData(response.data.user));
      yield put(loginSuccess(token));
      Cookies.set("token", token, { expires: 1, path: "/" });
    } else {
      // Login failed
      yield put(loginFail(response.data));
    }
  } catch (error) {
    alert("Error");
    // Handle error
    yield put(loginFail(error.response.data));
  }
}
function* loginUser() {
  yield takeEvery(LOGIN_USER, checkLoginUser);
}
export default loginUser;
