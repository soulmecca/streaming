import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streams from "../apis/streams";

export const signIn = uid => {
	return {
		type: SIGN_IN,
		payload: uid
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = formValues => async dispatch => {
	const response = streams.post("/streams", formValues);
	dispatch({
		type: CREATE_STREAM,
		payload: response.data
	});
};
