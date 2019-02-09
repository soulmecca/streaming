import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import streamReducer from "./streamReducer";
import history from "../history";

export default combineReducers({
	router: connectRouter(history),
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});
