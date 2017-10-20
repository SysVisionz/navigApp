import React from 'react';
import { ReduxLoginForm, CheckIfLoggedIn } from './components/common';
import { EmployeeList, EmployeeCreate } from './components'; 	
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{paddingTop: 25}}>
			<Scene 
				key="root"
				hideNavBar
			> 
				<Scene
						key="loginCheck"
						component={CheckIfLoggedIn}
						initial
				/>
				<Scene key="auth">
					<Scene 
						key="login" 
						component={ ReduxLoginForm } 
						title="Please Login" 
					/>
				</Scene>
				<Scene key="main">
					<Scene 
						key="employeeList" 
						component={EmployeeList} 
						title="Employee List"
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
					/>
					<Scene
						key="employeeCreate"
						component={ EmployeeCreate }
						title="Add new Employee"
					/>
				</Scene>
			</Scene>
		</Router>
	);
}

export default RouterComponent;