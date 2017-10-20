import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyB4NZxofyQlF17ufpg1JThdE9NF4_PU0ww',
    authDomain: 'navigapp-f499f.firebaseapp.com',
    databaseURL: 'https://navigapp-f499f.firebaseio.com',
    projectId: 'navigapp-f499f',
    storageBucket: 'navigapp-f499f.appspot.com',
    messagingSenderId: '1026647574507'
  };
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
