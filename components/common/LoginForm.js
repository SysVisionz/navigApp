import React, { Component } from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, AuthField, Spinner} from './';
import firebase from 'firebase';

export default class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false};

	onButtonPress(){
		const {email, password, loading} = this.state;
		this.setState({loading: true});
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail(){
		this.setState({error: 'Authentication Failed', loading: false});
	}

	onLoginSuccess(){
		this.setState({error: '', loading: false, email: '', password: ''})
	}

	isLoading(){
		if (this.state.loading){
			return <Spinner size ="small" />;
		}

		{
			return(
				<Button onPress = {this.onButtonPress.bind(this)}>
					Log in
				</Button>
			);
		}
	}

	render(){
		return(
			<Card>
				<CardSection>
					<AuthField 
						placeholder = "user@website.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<AuthField 
						obfuscate
						placeholder="****"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style = {styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.isLoading()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}