import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { 
	emailChanged, 
	passwordChanged,
} from './actions';
import { Card, 
	CardSection, 
	AuthField, 
	Button, 
	Spinner,
	AuthButton 
} from './';

const mapStateToProps = state => {
	const {
		email, 
		password, 
		error, 
		loading,
	} = state.auth;
	return {
		email: email,
		password: password,
		error: error,
		loading: loading,
	};
};

export default connect( mapStateToProps, { emailChanged, passwordChanged } )(class ReduxLoginForm extends Component {

	renderButton(){
		const { loading, keepLogin } = this.props;
		if (loading)
			return (<Spinner size="large" />);
		else
			return (<AuthButton />);
	}

	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange(text){
		this.props.passwordChanged(text);
	}
	render(){
		const {email, password, error, keepLogin } = this.props;
		const { onEmailChange, onPasswordChange, onKeepInChange, renderButton } = this;
		return(
			<Card>
				<CardSection>
					<AuthField
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={onEmailChange.bind(this)}
						value={email}
					/>
				</CardSection>

				<CardSection>
					<AuthField
						obfuscate
						label="Password"
						placeholder = "Password"
						onChangeText={onPasswordChange.bind(this)}
						value={password}
					/>
				</CardSection>
				<Text style = {styles.errorTextStyle}>
					{error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
});

const styles = {
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
}