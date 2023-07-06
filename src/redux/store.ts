import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import registerUserSaga from "@app/register/sagaRegister";
import loginUser from "@app/login/loginSaga";
import authSaga from "@app/logout/logoutSaga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer", "getUserDetailsReducer"], // Specify the reducer(s) to persist
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

export { store, persistor };
