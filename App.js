import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import config from './config.json';

export default class App extends React.Component {
  componentWillMount() {
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged( function (user) {
    if (user)
      console.log(user);
    else
      console.log("Nothin'");
})};

  render() {
    return (
      <Provider store={createStore(combineReducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
