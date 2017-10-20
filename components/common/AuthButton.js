import React, { Component } from 'react';
import { View } from 'react-native';
import { loginUser, keepLoginChanged } from './actions';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { Button } from './'

const mapStateToProps = state => {
	const {
		email, 
		password, 
		keepLogin,
	} = state.auth;
	return {
		email: email,
		password: password,
		keepLogin: keepLogin,
	};
};

export default connect( mapStateToProps, { keepLoginChanged, loginUser })( class AuthButton extends Component {
	onKeepInChange(value)
	{
		const {keepLogin, keepLoginChanged} = this.props;
		console.log(keepLogin);
		keepLoginChanged(keepLogin);
	}

	onButtonPress(){
		const { email, password, loginUser, keepLogin} = this.props;
		loginUser(email, password, keepLogin);
	}

	render() {
		const { keepLogin } = this.props;
		const {onButtonPress, onKeepInChange } = this;
		return (
			<View>
				<Button onPress={onButtonPress.bind(this)} style={{ height:'auto'}}>
					Login
				</Button>
				<CheckBox
					label="Keep Me Logged In" 
					checked={keepLogin}
					onChange={onKeepInChange.bind(this)}
				/>
			</View>
		);
	}
});

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}