import firebase from 'firebase';
import { EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOGIN_USER, 
	KEEP_LOGIN_CHANGED
} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const keepLoginChanged = (value) => {
	return {
		type: KEEP_LOGIN_CHANGED,
		payload: value
	};
};

export const loginUser = ( email, password, keepLogin ) => {
	return (dispatch) => {
		dispatch({type: LOGIN_USER});
		if (keepLogin)
			var loginFunc = firebase.auth().signInWith
		else
			var loginFunc = firebase.auth().signInWithEmailAndPassword(email, password);

		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({type: LOGIN_USER_FAIL});
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
}