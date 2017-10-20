import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, AuthField, Button } from './common';

const mapStateToProps = (state) => {
	const{ name, phone, shift } = state.employeeForm;
	return {name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(class EmployeeCreate extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card style={styles.cardStyle}>
				<CardSection>
					<AuthField
						label="Employee Name"
						placeholder="Jane"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
					/>
				</CardSection>
				<CardSection>
					<AuthField
						label="Phone Number"
						placeholder="xxx-xxx-xxxx"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
					/>
				</CardSection>
				<CardSection style={{flexDirection:'column'}}>
					<Text style={styles.pickerLabelStyle}>Shift</Text>
					<Picker 
						style={{alignSelf:'stretch'}}
						mode="dropdown"
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({prop: 'shift', value })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
				<Button onPress={this.onButtonPress.bind(this)}>
					Add Employee
				</Button>
			</Card>
		);
	}
});

const styles = {
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
}