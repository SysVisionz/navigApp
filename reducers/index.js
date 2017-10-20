import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';
import AuthReducer from '../components/common/reducers/AuthReducer';

export default combineReducers({
	employeeForm: EmployeeFormReducer,
	auth: AuthReducer
});