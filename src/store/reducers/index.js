import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import AuthReducers from "./authReducer";
import errorReducer from "./errorReducers";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  errors: errorReducer,
  auth: AuthReducers,
});

export default persistReducer(persistConfig, rootReducer);
