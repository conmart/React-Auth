import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJm5mY1eShUNX3LpZ6RM-8auK5XPd6qNU',
      authDomain: 'auth-2a731.firebaseapp.com',
      databaseURL: 'https://auth-2a731.firebaseio.com',
      projectId: 'auth-2a731',
      storageBucket: 'auth-2a731.appspot.com',
      messagingSenderId: '630451345759'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
