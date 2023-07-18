import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import registerUserSaga from "@app/register/sagaRegister";
import loginUser from "@app/login/loginSaga";
import authSaga from "@app/logout/logoutSaga";
import testSaga from "@app/testPage/testSaga";
import watchCreateTestSession from "@app/instruction/instructionSaga";
import testSessionSaga from "@app/testPage/testSaga";
import submitUserResponse from "@app/testPage/submitResponseSaga";
import resultSaga from "@app/result/resultSaga";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "loginUserReducer",
    "getUserDetailsReducer",
    "questionsReducer",
    "testPageReducer",
    "instructionReducer",
    "resultSaga",
  ], // Specify the reducer(s) to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(registerUserSaga);
sagaMiddleware.run(loginUser);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(testSaga);
sagaMiddleware.run(watchCreateTestSession);
sagaMiddleware.run(testSessionSaga);
sagaMiddleware.run(submitUserResponse);
sagaMiddleware.run(resultSaga);

export { store, persistor };
