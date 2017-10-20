import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	KEEP_LOGIN_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	keepLogin: false
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case KEEP_LOGIN_CHANGED:
			return { ...state, keepLogin: !action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload};
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };
		case LOGIN_USER:
			return { ...state, loading: true, error: ''}
		default:
			return state;
	}
};